import React from "react";
import Fade from "react-reveal/Fade";
import { Link as ScrollTo } from "react-scroll";
function BannerContent({ bannerSection }) {
  return (
    <div className="col-xs-12 col-md-5 order-2 order-md-1 ">
      <div className="banner-content">
        <h1>
         
          <Fade bottom big cascade>
            {bannerSection.bannerHeading}
          </Fade>
        </h1>

        <Fade bottom cascade>
          <p className="pe-md-5">{bannerSection.bannerTagLine}</p>
        </Fade>
        <div className="banner-btns">
          <ScrollTo to="contact" spy={true} smooth={true} duration={1000}>
            <button className="btn btn-1">CONTACT</button>
          </ScrollTo>
          <a
            href={bannerSection.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-1"
          >
            RESUME
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default BannerContent;
