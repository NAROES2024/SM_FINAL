import React from "react";
import TeamData from "../data/TeamData";

export default function Team() {

    return(
        <div class="container-xxl py-5" id="pricing">
            <div class="container py-5 px-lg-5">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="text-primary-gradient fw-medium">Samudramanthan 2024</h5>
                    <h1 class="mb-5">Team</h1>
                </div>
                <div class="tab-class text-center pricing wow fadeInUp" data-wow-delay="0.1s">
                    <div class="tab-content text-start">
                        <div class="tab-pane fade show mb-4 active">
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                {TeamData.map((member) => (
                                    <div class="col">
                                    <div class="card h-100 text-center">
                                        <img class="img-fluid bg-white rounded flex-shrink-0 p-1 mb-2"
                                            src={member.image}/>
                                        <div class="ms-4">
                                            <h5 class="mb-2">{member.name}</h5>
                                            <p class="mb-2">{member.position}</p>
                                            <div class="mb-4">
                                                <a class="btn btn-outline-light btn-social btn-secondary-gradient m-2" href={member.facebook}><i
                                                        class="fab fa-facebook-f"></i></a>
                                                <a class="btn btn-outline-light btn-social btn-secondary-gradient m-2" href={member.instagram}><i
                                                        class="fab fa-instagram"></i></a>
                                                <a class="btn btn-outline-light btn-social btn-secondary-gradient m-2" href={member.linkedin}><i
                                                        class="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}