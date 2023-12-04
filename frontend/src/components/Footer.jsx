import React from "react";

function Footer() {
  return (
    <>
      <div
        class="container-fluid bg-primary text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5 px-lg-5">
          <div class="row g-5">
            <div class="col-md-6 col-lg-8">
              <h4 class="text-white mb-4">Address</h4>
              <p>
                <i class="fa fa-map-marker-alt me-3"></i>Indian Institute of
                Technology Kharagpur Kharagpur, West Bengal 721302 India
              </p>
              <p>
                <i class="fa fa-phone-alt me-3"></i>9307403993 / 9325000320 (web Heads)
              </p>
              <p>
                <i class="fa fa-envelope me-3"></i>
                samudramanthan.iitkgp.2024@gmail.com
              </p>
              <div class="d-flex pt-2">

                <a class="btn btn-outline-light btn-social" href="https://www.facebook.com/samudramanthan.iitkgp/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="https://www.instagram.com/sm.iitkgp/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/smiitkgp/?originalSubdomain=in" >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <h4 class="text-white mb-4">Quick Link</h4>
              <a class="btn btn-link" href="/">
                Home
              </a>
              <a class="btn btn-link" href="/about">
                About Us
              </a>
              <a class="btn btn-link" href="/gallery">
                Gallery
              </a>
              <a class="btn btn-link" href="team">
                Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
