import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const sizeOptions = ["Small", "Medium", "Large", "XL", "XXL"];

function loadscript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function TshirtModal(props) {
  console.log(props.user);
  function registerToTshirt() {
    const data = {
      token: localStorage.getItem("token"),
      orderId: props.user.id,
      size: props.user.size,
    };
    axios
      .post("http://localhost:5000/tshirt", data)
      .then((res) => {
        console.log("You have successfully added to the tshirt");
      })
      .catch((err) => console.log(err));
  }

  async function displayRazorpay(data) {
    registerToTshirt();
    const res = await loadscript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const options = {
      key: "rzp_test_tzyr3bXBeGsUoZ", // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      name: "Capature the water Registeration", //your business name
      description: "Test Transaction",
      image: "img/logo.png",
      callback_url: "http://localhost:5000/success/tshirt",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: data.name,
        email: data.email,
        contact: data.contact,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    console.log(options);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Tshirt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="text-center">
          <h5 class="text-primary-gradient fw-medium">Samudramanthan</h5>
          <h1 class="mb-5">Hellow {props.user.name}</h1>
          <p>Email : {props.user.email}</p>
          <p>contact number : {props.user.contact}</p>
          <p>SM id : {props.user.sm_id}</p>
          <p>Order id : {props.user.id}</p>
          <p>Fees : {props.user.amount / 100}</p>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formSizeSelect">
            <Form.Label>Size</Form.Label>
            <Form.Control
              as="select"
              placeholder="Enter Size"
              onChange={(e) => {
                props.setUser({
                  ...props.user,
                  size: e.target.value,
                });
              }}
            >
              {sizeOptions.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            displayRazorpay(props.user);
          }}
        >
          Pay
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TshirtModal;
