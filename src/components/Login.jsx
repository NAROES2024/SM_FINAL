import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [smid, setSmid] = useState("");
  const [password, setPassword] = useState("");
  const nagivate = useNavigate();

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
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("user", JSON.stringify(res.data.user));
            alert("Login Successful");
            nagivate("/");
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
                      id="email"
                      placeholder="Your email"
                      name="email"
                      onChange={(e) => setSmid(e.target.value)}
                      required
                    />
                    <label for="sm id">Email</label>
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