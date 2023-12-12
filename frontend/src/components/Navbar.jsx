import React from "react";
import { Link } from "react-router-dom";

function Navbar(page) {
  const home = page.page === "home" ? " active" : "";
  const about = page.page === "about" ? " active" : "";
  const gallery = page.page === "gallery" ? " active" : "";
  const team = page.page === "team" ? " active" : "";
  const cap = page.page === "cap" ? " active" : "";
  const schedule = page.page === "schedule" ? " active" : "";
  const event = page.page === "events" ? " active" : "";
  
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("smid");
    window.location.href = "/";
  }

  return (
    <>
      <nav className="navbar sticky-top shadow-sm navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0">Samudramanthan</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
            <Link to="/" className={"nav-item nav-link" + home}>
              Home
            </Link>
            <Link to="/event" className={"nav-item nav-link" + event}>
              Events
            </Link>
            <Link to="/about" className={"nav-item nav-link" + about}>
              About
            </Link>
            <Link to="/gallery" className={"nav-item nav-link" + gallery}>
              Gallery
            </Link>
            <Link to="/team" className={"nav-item nav-link" + team}>
              Our Team
            </Link>
            <Link to="/cap" className={"nav-item nav-link" + cap}>
              CAP
            </Link>
            <Link to="/schedule" className={"nav-item nav-link" + schedule}>
              Schedule
            </Link>
          </div>
          {localStorage.getItem("token") ? (
            <button
              onClick={logout}
              className="btn btn-green-gredient rounded-pill py-2 px-4 navbar-nav"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/register"
              className="btn btn-primary-gradient rounded-pill py-2 px-4 navbar-nav"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
