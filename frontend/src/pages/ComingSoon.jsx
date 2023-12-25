import React from "react";
import axios from 'axios';
import queryString from 'query-string';
function ComingSoon() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <div className="coming_soon display-4">Coming soon....</div>
        <div className="my-2">
          <form method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSdcjwcZy00HKvY9X4qbCyJBs6OyDggVm9dNrIVpAUULzk2a_Q/formResponse" target="_blank">
            <div class="form-group">
              <label for="email" className="my-2">Want to stay updated? Please enter your mail id</label>
              <input type="email" name="entry.865910762" class="form-control" id="email" placeholder="Your mail" />
            </div>
            <button type="submit" class="btn btn-primary-gradient rounded-pill py-2 px-3 my-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
