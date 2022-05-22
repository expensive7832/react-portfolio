import React from "react";
import Fade from "react-reveal/Fade";

function Heading({ heading}) {
  return (
    <div className="row justify-content-center">
      <div className="col-xs-8">
        <div className="banner-content">
          <h1 style={{textShadow: "2px 2px #7f5af0"}}>
            <Fade bottom big cascade>
              {heading}
            </Fade>
          </h1>
        </div>
      </div> 
    </div>
  );
}

export default Heading;
