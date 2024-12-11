import React from "react";
import { Link } from "react-scroll";

export default function CapForm() {
    return (
      <>
        <div class="container-xxl" id="contact">
          <div class="container px-lg-5">
            <div class="row g-5 align-items-center">
              <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 class="text-primary-gradient fw-medium">
                    SM'25 Campus Ambassador
                </h5>
                {/* <h3 class="mb-5">Apply Now: Use the scanner in the poster or click here:  </h3>    */}
                <a
                    href="https://forms.gle/J4jPHPomZRHuB5nq5"
                    class="d-inline-flex bg-primary-gradient rounded py-3 px-4"
                >
                    <i class="fab bi bi-cart-fill fa-3x text-white flex-shrink-0"></i>
                        <div class="ms-3">
                            <h5 class="text-white mb-0">Apply Now</h5>
                        </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } 