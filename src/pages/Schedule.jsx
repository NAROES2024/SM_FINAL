import React from "react";
import ScheduleBody from "../components/ScheduleBody";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Schedule() {
  return (
    <div class="container-xxl bg-white p-0">
      <div class="container-xxl position-relative p-0" id="home">
        <Navbar page="schedule" />
      </div>
      <ScheduleBody />
      <Footer />
    </div>
  );
}

export default Schedule;
