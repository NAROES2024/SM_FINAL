import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SponsorData from "../data/SponsorData";

function PastSponsors() {
  const options = {
    autoplay: true,
        loop: true,
        center: false,
        dots: false,
        nav: true,      
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>',
        ],
        smartSpeed: 600,         
        autoplaySpeed: 800,
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
    <div class="container-xxl py-5">
      <div class="container py-5 px-lg-5">
        <div
          class="text-center pb-4 animated slideInDown"
          data-wow-delay="0.1s"
        >
          <h5 class="text-primary-gradient fw-medium">Samudramanthan</h5>
          <h1 class="">Past Sponsors</h1>
          <p class="mb-0">
          Thank you to all our sponsors for their invaluable support over the years.
          </p>
        </div>

        <div className="container my-2"></div>

        <OwlCarousel
            className="owl-carousel history-carousel wow fadeInUp"
            {...options}
        >
            {SponsorData.map((spons) => (
                <div class="spons-item tab-content text-start">
                    <div class="card spons-img">
                        <img
                            class="card-img-top"
                            src={spons.img}
                            alt={`Samudramanthan ${spons.id}`}
                        />
                    </div>
                </div>
            )) }
        </OwlCarousel>

      </div>
    </div>
  );
}

export default PastSponsors;
