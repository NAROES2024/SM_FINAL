import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Sponsars() {
  const options = {
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    loop: true,
    dots: true,
    nav: true,
    
    items: 1,
  };

  return (
    <div class="container-xxl py-5">
      <div class="container py-5 px-lg-5">
        <div class="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h5 class="text-primary-gradient fw-medium">Samudramanthan'24</h5>
          <h1 class="">Our Sponsors</h1>
          <p class="mb-0">
            Our heartfelt gratitude to our esteemed sponsors for their
            invaluable support in making Samudramanthan a great success.
          </p>
          <p class="mb-0">Together, we make waves of change.</p>
        </div>
        <div class="row gy-5 gx-4 justify-content-center">
          <div
            class="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp"
            data-wow-delay="0.3s"
          >
              <OwlCarousel
                className="owl-carousel screenshot-carousel" {...options}
              >
                <img className="img-fluid" src="img/screenshot-1.png" alt="" />
                <img className="img-fluid" src="img/screenshot-2.png" alt="" />
                <img className="img-fluid" src="img/screenshot-3.png" alt="" />
                <img className="img-fluid" src="img/screenshot-4.png" alt="" />
                <img className="img-fluid" src="img/screenshot-5.png" alt="" />
              </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsars;
