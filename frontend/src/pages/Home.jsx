import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import EventSection from "../components/EventSection";
import Tshirt from "../components/Tshirt";
import Sponsars from "../components/Sponsars";

function Home() {
  return (
    <>
      <div class="container-xxl bg-white p-0">
        <div class="container-xxl position-relative p-0" id="home">
          <Navbar page="home" />
          <Hero />
        </div>
        <Sponsars />
        <EventSection />
        <Tshirt />
        <Footer />
        
      </div>
    </>
  );
}

export default Home;
