import React from "react";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import ContactMail from "../contactMail/ContactMail";
import Navigation from "../navigation/Navigation";
import SocialMedias from "../socialMedias/SocialMedias";

const PageHeader = ({ language, positionScrollY, windowHeight }) => {
  return (
    <header>
      <div className="header_logo">
        <figure>
          <img
            src={logo}
            alt="logo"
            className="headerLogo_img"
            onClick={() => window.location.reload(false)}
          ></img>
          <figcaption>
            <h1 className="headerLogo_title">
              DAHISLAND
              <span> DEVELOPMENT </span>
            </h1>
          </figcaption>
        </figure>
      </div>

      <Navigation
        language={language}
        positionScrollY={positionScrollY}
        windowHeight={windowHeight}
      />

      <div className="header_contact">
        <ContactMail />
        <SocialMedias />
      </div>

      <p className="header_copyright">©2022 Myriam Mornet</p>
    </header>
  );
};

PageHeader.propTypes = {
  language: PropTypes.string,
  activeNavLinkId: PropTypes.string,
  setActiveNavLinkId: PropTypes.func,
};

export default PageHeader;
