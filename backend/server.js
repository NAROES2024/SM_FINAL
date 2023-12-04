const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const crypto = require("crypto");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const mongodb = mongoose.connection;
mongodb.on("error", (error) => console.error(error));
mongodb.once("open", () => console.log("Connected to Database"));

//rondom number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//hashing password
const bcrypt = require("bcrypt");
const saltRounds = 10;

//json web token
const jwt = require("jsonwebtoken");

//SendGrid mail
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//importing schema
const Registration = require("./Schema/user");

const Event = require("./Schema/eventSchema");
const { Console } = require("console");

//cors
app.use(cors());

app.post("/register", async (req, res) => {
  var val = getRandomInt(1000);
  const user = await Registration.findOne({ sm_id: "24SM" + val });
  while (user) {
    val = getRandomInt(1000);
  }
  var sm_id = "24SM" + val;
  if (req.body.password.length < 8) {
    res.send("password should be of atleast 8 characters");
  } else {
    const alreadyRegistered = await Registration.findOne({
      email: req.body.email,
      contact: req.body.contact,
      name: req.body.name,
    });
    if (alreadyRegistered) {
      res.send("user already registered");
    } else {
      try {
        const password_hash = await bcrypt.hash(req.body.password, saltRounds);

        const registrationData = new Registration({
          name: req.body.name,
          email: req.body.email,
          password: password_hash,
          sm_id: sm_id,
          college: req.body.college,
          contact: req.body.contact,
          created_at: Date.now(),
        });

        registrationData
          .save()
          .then((result) => {
            res.send("registration data saved successfully");
            console.log(result);
          })
          .catch((err) => {
            res.send("something went wrong in saving registration data");
            console.log(err);
          });
      } catch (error) {
        res.send("something went wrong in password hashing");
        console.log(error);
      }
    }
  }
});

//login and authentication using jwt and cookie-parser
app.post("/login", async (req, res) => {
  sm_id = req.body.sm_id;
  password = req.body.password;
  try {
    const user = await Registration.findOne({ sm_id: sm_id });
    if (user) {
      const password_match = await bcrypt.compare(password, user.password);
      if (password_match) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        await Registration.updateOne(
          { sm_id: sm_id },
          { $set: { token: token } }
        );
        console.log(token);
        res.json({ token: token, message: "login successful" });
      }
    } else {
      res.send("invalid credentials");
    }
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
});

//get user data by localstroge sm_id and token

app.get("/user", async (req, res) => {
  try {
    const token = req.headers.token;
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Registration.findOne({ _id: decoded.id });
    const data = {
      name: user.name,
      email: user.email,
      sm_id: user.sm_id,
      college: user.college,
      contact: user.contact,
    };
    res.send(data);
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
});

//razorpay payment gateway for capturethewater event
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

//razorpay payment gateway for capturethewater event

app.post("/razorpay/capturethewater", async (req, res) => {
  const token = req.body.token;
  console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await Registration.findOne({ _id: decoded.id });
  console.log(user);

  const amount = 100;
  const options = {
    amount: (amount * 100).toString(),
    currency: "INR",
    receipt: shortid.generate(),
  };
  try {
    const response = await razorpay.orders.create(options);
    //update order id in user database
    await Registration.updateOne(
      { _id: decoded.id },
      { $set: { orderId: response.id } }
    )
      .then((result) => {
        console.log(result);
      })
    console.log("order id updated in user database");
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      name: user?.name,
      email: user?.email,
      contact: user?.contact,
      sm_id: user?.sm_id,
      teamSize: 4,
    });
  } catch (error) {
    console.log(error);
  }
});

// Handle the Razorpay webhook endpoint
app.post("/success/capturethewater", async (req, res) => {
  const body = req.body;
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = body;
  // Verify the signature
  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  console.log(generatedSignature, razorpay_signature);
  if (generatedSignature === razorpay_signature) {
    // Signature is valid. Fetch user details based on the order ID or any identifier.
    const event = await Event.findOne({ orderId: razorpay_order_id });
    if (event) {
      // Store the user details in the event collection
      event.paymentId = razorpay_payment_id;
      event.save();
      res.send("Payment successful");
    } else {
      // User not found
      res.status(400).send("User not found for the given order ID.");
    }
  } else {
    // Invalid webhook, do not process.
    res.status(400).send("Invalid webhook signature.");
  }
});

//register in event
// name: data.name,
//       email: data.email,
//       contact: data.contact,
//       link: event.link,
//       id: data.id,
//       sm_id: data.sm_id,
//       currency: data.currency,
//       teamSize : data.teamSize,

app.post("/register/event", async (req, res) => {
  const token = req.body.token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await Registration.findOne({ _id: decoded.id });
  console.log("user : ")
  console.log(user);
  const data = req.body;
  console.log("data : ")
  console.log(data);
  const event = new Event({
    name: user.name,
    email: user.email,
    sm_id: user.sm_id,
    college: user.college,
    contact: user.contact,
    event: data.event,
    orderId: data.orderId,
    teammembers: data.teammembers,
    created_at: Date.now(),
  });
  event
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).send("added to event");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("failed to add in event");
    });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
