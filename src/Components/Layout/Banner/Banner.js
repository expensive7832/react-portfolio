import React, { useContext, Fragment } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScrollContext } from "../../../Context/scroll";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import { bannerSection } from "../../../techfolio";

function Banner() {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <section className="section section1" id="bannerSection" name="home">
      <div className="site-container">
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) {
              scrollChange("home");
            }
          }}
        >
          <div className="container-fluid">
          <div className="row align-items-center">
         
         <BannerContent bannerSection={bannerSection} />
         <BannerImage bannerSection={bannerSection} />
   
   </div>
          </div>
        </VisibilitySensor>
      </div>
    </section>
  );
}
export default Banner;
