import React from "react";
import Navbar from "./Navbar/Navbar";
import { socialNetworks, app } from "../../techfolio";
import AppHelmet from "../common/AppHelmet";

function Header() {
  
  return (
    <header className="site-header">
      <AppHelmet app={app} />
      <div className="site-container container-fluid">
      <div className="row justify-content-between align-items-center">
      <div className="col-xs-6 col-md-3">
        <div className="mylogo">
            JIMOH YUSUF 
          </div>
          <div className="d-none d-md-block col-md-7"></div>
        </div>
        <div className=" col-xs-6 col-md-2">
          <ul className="social-networks d-flex align-items-center spin-icon">
                  <li>
                    <a
                      href={socialNetworks.github}
                      className="icon-github social-network-link"
                    >
                      github
                    </a>
                  </li>
                  <Navbar />
           </ul>
          </div>
      </div>
      </div>
    </header>
  );
}
export default Header;
