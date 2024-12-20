import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import historyData from "../data/HistoryData";

function History() {
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
    return(
        <div class="container-xxl py-5" id="pricing">
            <div class="container py-5 px-lg-5">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="text-primary-gradient fw-medium">History</h5>
                    <h1 class="mb-5">Honoring our Heritage</h1>
                </div>
                <div class="tab-class text-center pricing wow fadeInUp" data-wow-delay="0.1s">
                    <p class="md-4">Started in 2008, Samudramanthan has come a long way.
                        Seen
                        Exponential growth in last 10 years and
                        accounting for the total participation of more than 2000 participants
                        across
                        both online and offline</p>
                    
                    <OwlCarousel
                        className="owl-carousel history-carousel wow fadeInUp"
                        {...options}
                    >
                    {historyData.map((event) => (
                        <div class="history-item tab-content text-start">
                            <div class="card h-100">
                                <img
                                    class="card-img-top"
                                    src={event.img}
                                    alt={`Samudramanthan ${event.year}`}
                                />
                                <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                    <h4 class="mb-3">{event.year}</h4>
                                    <p>{event.desc}</p>
                                </div>
                            </div>
                        </div>
                    )) }
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
}

export default History;