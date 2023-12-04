import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [smid, setSmid] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (smid === "" || password === "") {
      alert("Please fill all the fields");
    } else {
      const data = {
        sm_id: smid,
        password: password,
      };
      console.log(data);
      axios
        .post("http://localhost:5000/login", data)
        .then((res) => {
          console.log(res);
          if (res.data.message === "login successful") {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("smid", smid);
            alert("Login Successful");
            window.location.href = "/";
          } else {
            alert("Login Failed");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Login Failed");
        });
    }
  }
  //create taken cookie

  return (
    <>
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
                      id="smid"
                      placeholder="Your smid"
                      name="smid"
                      onChange={(e) => setSmid(e.target.value)}
                      required
                    />
                    <label for="sm id">SM Id</label>
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
                <div class="col-12 text-center">
                  <button
                    class="btn btn-primary-gradient rounded-pill py-3 px-5"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Login
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
