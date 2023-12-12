import React from "react";
import Events from "../data/EventShort";
import {Link} from 'react-router-dom';
function EventSection() {

    return(
        <div class="container-xxl py-5" id="feature">
            <div class="container py-5 px-lg-5">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="text-primary-gradient fw-medium">For Samudramanthan 2024</h5>
                    <h1 class="mb-5">Events</h1>
                </div>
                <div class="row g-4">
                    {Events.map((event) => (
                        <div class="col-lg-4 col-md-6 wow fadeInUp h-100" data-wow-delay="0.1s">
                        <a href={event.link}>
                        <div class="feature-item bg-light rounded p-4" style={{display: "flex", alignItems:"center"}}>
                            <i class="fa-solid fa-anchor fa-xl mx-2"></i>
                            <h5 style={{marginBottom: "0px"}}>{event.name}</h5>
                        </div>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EventSection;