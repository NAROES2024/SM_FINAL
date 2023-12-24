import classes from "./ComingSoon.css";
import React from "react";




const ComingSoon = () => {
  return (
    <>
      <div className="comsouterdiv">
        <div
          className="overlaycoms"
          // style={{
          //   backgroundImage: `url("https://i.postimg.cc/cJkmLxcr/egradient.png")`,
          // }}
        ></div>
        <div className="containercoms">
          <div className="comstext">
            <div className="comscoming">
              <i>COMING</i>
            </div>
            <div className="comssoon">
              <i>SOON</i>
            </div>
            {/* <div className="gif">
              
            <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/oFDSjMfe11iiOgQRfY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
