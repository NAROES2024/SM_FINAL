import React, { useEffect } from "react";
import $ from 'jquery';

function Screenshot() {

    // useEffect(() => {
    //     // Initialize Owl Carousel for the screenshot section

    //     $("#owl-demo").owlCarousel({
    //         navigation : true
    //       });

    //     $(".screenshot-carousel").owlCarousel({
    //       autoplay: true,
    //       smartSpeed: 500,
    //       loop: true,
    //       dots: true,
    //       items: 1,
    //       animateIn: 'slideInDown',
    //     });
    //   }, []);
    return(
        <div class="container-xxl py-5">
            <div class="container py-5 px-lg-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="text-primary-gradient fw-medium">Screenshot</h5>
                        <h1 class="mb-4">User Friendly interface And Very Easy To Use Fitness App</h1>
                        <p class="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                        <p><i class="fa fa-check text-primary-gradient me-3"></i>Diam dolor diam ipsum et tempor sit</p>
                        <p><i class="fa fa-check text-primary-gradient me-3"></i>Aliqu diam amet diam et eos labore</p>
                        <p class="mb-4"><i class="fa fa-check text-primary-gradient me-3"></i>Clita erat ipsum et lorem et sit</p>
                        <a href="" class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Read More</a>
                    </div>
                    <div class="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp" data-wow-delay="0.3s">
                        <div class="owl-carousel screenshot-carousel">
                            <img class="img-fluid" src="img/screenshot-1.png" alt=""/>
                            <img class="img-fluid" src="img/screenshot-2.png" alt=""/>
                            <img class="img-fluid" src="img/screenshot-3.png" alt=""/>
                            <img class="img-fluid" src="img/screenshot-4.png" alt=""/>
                            <img class="img-fluid" src="img/screenshot-5.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Screenshot;