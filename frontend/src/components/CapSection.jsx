import React from "react";
import { Link } from "react-router-dom";
export default function CapSection() {
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container py-5 px-lg-5">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5 class="text-primary-gradient fw-medium">
                Campus Ambassador SM'24
              </h5>
              <h1 class="mb-4">Join Samudramanthan as a Campus Ambassador</h1>
              <p class="mb-4">
                If you possess a passion for ocean engineering and naval
                architecture and aspire to contribute to the advancement of
                these fields, consider the opportunity to become a Campus
                Ambassador for Samudramanthan at IIT Kharagpur. As a
                Samudramanthan Campus Ambassador, you will have the opportunity
                to represent Samudramanthan on your campus, connect with
                like-minded individuals, and contribute to the growth of marine
                engineering knowledge.
              </p>
              <p>
                <i class="fa fa-check text-primary-gradient me-3"></i>5+ participants brought: Certificate and
 Website Recognition
              </p>
              <p>
                <i class="fa fa-check text-primary-gradient me-3"></i>15+ participants brought: No participation fee and
Complimentary merch.
              </p>
              <p class="mb-4">
                <i class="fa fa-check text-primary-gradient me-3"></i>20+ participants brought: No accommodation charges.
              </p>
              <p class="mb-4">
                <i class="fa fa-check text-primary-gradient me-3"></i>30+ participants brought: Amazon vouchers and Gift coupons.
              </p>
              <p class="mb-4">
                <i class="fa fa-check text-primary-gradient me-3"></i>50+ participants brought: Goodies worth 5k+.
              </p>
              <p class="mb-4">
                <i class="fa fa-check text-primary-gradient me-3"></i>For the best campus ambassador an Outstanding Ambassador Award.
              </p>
            </div>
            <div
              class="col-lg-6 d-flex justify-content-center justify-content-lg-end wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <img
                class="img-fluid wow fadeInUp"
                data-wow-delay="0.1s"
                src="img\Cap\CAP.png"
              />
            </div>
          </div>
        </div>
        <div className="text-center animated slideInRight">
        <h3 >Want to be the Campus Ambassator?</h3>
        <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSdvmPxoLN3wMY7cGvjaP_Ol5dVteTr-JYz-R57k3Ex-4lYemA/viewform"
              className="btn btn-primary-gradient rounded-pill py-2 px-4 my-2"
              target="_blank"
            >
              Register Here
        </Link>
        </div>
        


      </div>
    </>
  );
}
