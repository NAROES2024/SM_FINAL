import React from "react";

export default function AboutSection() {
    return(
        <div class="container-xxl py-5" id="about">
            <div class="container py-5 px-lg-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="text-primary-gradient fw-medium">NAROES</h5>
                        <h1 class="mb-4">About Samudramanthan</h1>
                        <p class="mb-4">
                                 Students from all around India participated actively in Samudramanthan in 23 <br />
                                 It was a huge success because of the diligent labour, devotion, excitement, ingenuity, and inventiveness. <br />
                                 We had the largest participation ever and received praise for the interesting and difficult competitions. <br />
                            </p>
                        <div class="row g-4 mb-4">
                            <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                <div class="d-flex">
                                <i class="fa-solid fa-sack-dollar fa-2x text-primary-gradient flex-shrink-0 mt-1"></i>
                                    <div class="ms-3">
                                        <h2 class="mb-0" data-toggle="counter-up">135000</h2>
                                        <p class="text-primary-gradient mb-0">Cash Price</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                                <div class="d-flex">
                                    <i class="fa-solid fa-graduation-cap fa-2x text-secondary-gradient flex-shrink-0 mt-1"></i>
                                    <div class="ms-3">
                                        <h2 class="mb-0" data-toggle="counter-up">15</h2>
                                        <p class="text-secondary-gradient mb-0">Colleges</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4 mb-4">
                            <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                <div class="d-flex">
                                    <i class="fa-solid fa-calendar-days fa-2x text-primary-gradient flex-shrink-0 mt-1"></i>
                                    <div class="ms-3">
                                        <h2 class="mb-0" data-toggle="counter-up">8</h2>
                                        <p class="text-primary-gradient mb-0">Event</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                                <div class="d-flex">
                                    <i class="fa-solid fa-people-group fa-2x text-secondary-gradient flex-shrink-0 mt-1"></i>
                                    <div class="ms-3">
                                        <h2 class="mb-0" data-toggle="counter-up">40</h2>
                                        <p class="text-secondary-gradient mb-0">Team Member</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/register" class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Register</a>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid wow fadeInUp" data-wow-delay="0.5s" src="img/logo.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
}