import React from "react";  

function Hero() {

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("smid");
        window.location.href = "/";
    }

    return (
        <>
            <div class="container-xxl bg-primary hero-header">
                <div class="container px-lg-5">
                    <div class="row g-5">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h1 class="text-white mb-4 animated slideInDown">Prepare to embark on an Epic Adventure with NAROES</h1>
                            <p class="text-white pb-3 animated slideInDown">Dive deep into the mythical waters of Samudra Manthan, where gods and demons join forces to stir the ocean's depths and reveal its timeless wonders.</p>
                            {localStorage.getItem("token") ? (
                                
                                <a onClick={logout} class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill me-3 animated slideInLeft">logout</a>
                            ) : (
                                <a href="/register" class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill me-3 animated slideInLeft">Register</a>
                            )}
                            <a href="" class="btn btn-secondary-gradient py-sm-3 px-4 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                        </div>
                        <div class="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp mt-0" data-wow-delay="0.3s">
                            <img class="img-fluid" src="img/logo.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;