import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegisterSection from "../components/RegisterSection";
import Login from "../components/Login";

export default function Register() {
    return(
        <>
      <div class="container-xxl bg-white p-0">
        <div class="container-xxl position-relative p-0" id="home">
          <Navbar page="register" />
        </div>
        <div class="container-xxl py-5" id="pricing">
            <div class="container py-5 px-lg-5">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="text-primary-gradient fw-medium">Welcome to</h5>
                    <h1 class="mb-5">Samudramanthan'24</h1>
                </div>
                <div class="tab-class text-center pricing wow fadeInUp" data-wow-delay="0.1s">
                    <ul
                        class="nav nav-pills d-inline-flex justify-content-center bg-primary-gradient rounded-pill mb-5">
                        <li class="nav-item">
                            <button class="nav-link active" data-bs-toggle="pill" href="#tab-1">Login</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" data-bs-toggle="pill" href="#tab-2">Register</button>
                        </li>
                    </ul>
                    <div class="tab-content text-start">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            < Login />
                        </div>
                        <div id="tab-2" class="tab-pane fade p-0">
                            <RegisterSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        
      </div>
    </>
    );
}