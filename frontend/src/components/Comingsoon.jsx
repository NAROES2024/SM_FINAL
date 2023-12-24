import classes from "./ComingSoon.css";
import React from "react";




const ComingSoon = () => {
  return (
    <>
      <div className="comsouterdiv">
        <div
          className="overlaycoms"
          style={{
            backgroundImage: `url("https://i.postimg.cc/cJkmLxcr/egradient.png")`,
          }}
        ></div>
        <div className="containercoms">
          <div className="comstext">
            <div className="comscoming">
              Coming
            </div>
            <div className="comssoon">
              Soon
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
