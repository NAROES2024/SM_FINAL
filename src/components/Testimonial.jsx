import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import testimonialData from "../data/TestimonialData";

function Testimonial() {
  const options = {
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div class="container-xxl py-5" id="review">
        <div class="container py-5 px-lg-5">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="text-primary-gradient fw-medium">Testimonial</h5>
            <h1 class="mb-5">Tales from the Samudramanthan</h1>
          </div>
          {/* <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s"> */}
          <OwlCarousel
            className="owl-carousel testimonial-carousel wow fadeInUp"
            {...options}
          >
            {testimonialData.map((data) => {
              return (
                <div class="testimonial-item rounded p-4">
                  <div class="d-flex align-items-center mb-4">
                    <img
                      class="img-fluid bg-white rounded flex-shrink-0 p-1"
                      src={data.imglink}
                      style={{ width: "85px", height: "85px" }}
                    />
                    <div class="ms-4">
                      <h5 class="mb-1">{data.name}</h5>
                      <p class="mb-1">{data.profession}</p>
                      <div>
                        <small class="fa fa-star text-warning"></small>
                        <small class="fa fa-star text-warning"></small>
                        <small class="fa fa-star text-warning"></small>
                        <small class="fa fa-star text-warning"></small>
                        <small class="fa fa-star text-warning"></small>
                      </div>
                    </div>
                  </div>
                  <p class="mb-0">{data.testimonial}</p>
                </div>
              );
            })}
          </OwlCarousel>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
