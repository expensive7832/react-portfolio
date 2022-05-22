import React, { Fragment } from "react";
import Flip from "react-reveal/Flip";
function BannerImage({ bannerSection }) {
  return (
    <Fragment>
      <div className="col-xs-12 col-md-4 order-1 order-md-2 ">
        <Flip left>
          <div className="hero-image shape">
            
            <div
              className={
                bannerSection.bannerAvatar === "defaultAvatar.svg"
                  ? "wrap-default"
                  : "wrap-image"
              }
            >
              <img
                src={require(`./../../../assets/imgs/${bannerSection.bannerAvatar}`)}
                alt=""
                className="hero-image_img"
              />
            </div>
          </div>
        </Flip>
      </div>
      <div className="col-xs-1"/>
    </Fragment>
  );
}

export default BannerImage;
