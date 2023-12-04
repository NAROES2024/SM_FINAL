import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

export default function Gallery() {
    return(
        <div class="container-xxl bg-white p-0">
        <div class="container-xxl position-relative p-0" id="home">
          <Navbar page="gallery"/>
        </div>
        <Slider />
        <Footer />
        
      </div>
    );
}