import React from "react";
import {Link} from 'react-scroll';
function Navbar(page) {
  const home = page.page === "home" ? " active" : "";
  const about = page.page === "about" ? " active" : "";
  const gallery = page.page === "gallery" ? " active" : "";
  const team = page.page === "team" ? " active" : "";
  const cap = page.page === "cap" ? " active" : "";
  const schedule = page.page === "schedule" ? " active" : "";
  
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("smid");
    window.location.href = "/";
  }

  return (
    <>
      <nav class="navbar sticky-top shadow-sm navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="/" class="navbar-brand p-0">
          <h1 class="m-0">Samudramanthan</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ml-auto py-0">
            <a href="/" class={"nav-item nav-link" + home}>
              Home
            </a>
            <Link
            class={"nav-item nav-link" + schedule}
            to="feature"  // Replace with the ID or name of your event section component
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout (to account for fixed navbar)
            duration={500}
          >
            Events
            </Link>
            <a href="/about" class={"nav-item nav-link" + about}>
              About
            </a>
            <a href="/gallery" class={"nav-item nav-link" + gallery}>
              Gallery
            </a>
            <a href="/team" class={"nav-item nav-link" + team}>
              Our Team
            </a>
            <a href="/cap" class={"nav-item nav-link" + cap}>
              CAP
            </a>
            <a href="/schedule" class={"nav-item nav-link" + schedule}>
              Schedule
            </a>
          </div>
          {localStorage.getItem("token") ? (
            <a
              onClick={logout}
              class="btn btn-green-gredient rounded-pill py-2 px-4 navbar-nav"
            >
              Logout
            </a>
          ) : (
            <a
              href="/register"
              class="btn btn-primary-gradient rounded-pill py-2 px-4 navbar-nav"
            >
              Login
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
