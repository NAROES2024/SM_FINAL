import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Screenshot() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [Smessage, setSmessage] = useState("Please fill your email correctly all details will be sent to this email");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      setSmessage("Password does not match");
      setColor("text-warning");
    } 
    else if(name === "" || email === "" || college === "" || password === "" || confirm_password === "" || contact === ""){
      setSmessage("Please fill all the fields");
      setColor("text-warning");
    }
    else {
      const data = {
        name: name,
        email: email,
        college: college,
        password: password,
        contact: contact,
      };
      console.log(data);
      axios
        .post("http://localhost:5000/register", data)
        .then((res) => {
          console.log(res);
          setSmessage("Registration Successful");
          setColor("message text-success");
        })
        .catch((err) => {
          console.log(err);
          setSmessage("Registration Failed");
          setColor("message text-danger");
        });
    }
  };

  return (
    <>
      <p class={"text-center fadeInUp "+color}>
        {Smessage}
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="wow fadeInUp" data-wow-delay="0.3s">
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label>Your Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label>Your Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="Subject"
                      name="college"
                      onChange={(e) => setCollege(e.target.value)}
                      required
                    />
                    <label>Your Institute name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Your Name"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label>Password</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="confirm_password"
                      placeholder="Your Name"
                      name="confirm_password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <label>Confirm Password</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="tel"
                      class="form-control"
                      id="contact"
                      placeholder="Your contact"
                      name="contact"
                      pattern="[0-9]{10}"
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                    <label>Contact number</label>
                  </div>
                </div>
                <div class="col-12 text-center">
                  <button
                    class="btn btn-primary-gradient rounded-pill py-3 px-5 mt-0 ml-0"
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
