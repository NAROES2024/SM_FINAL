import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventDetail from "../components/EventDetail";

function Event({event}){
    console.log(event)
    return(
        <>
        <div class="container-xxl bg-white p-0">
        <div class="container-xxl position-relative p-0" id="home">
          <Navbar />
        </div>
        <EventDetail link={event.link} />
        <Footer />
        
      </div>
        </>
    );
}

export default Event;