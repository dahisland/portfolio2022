import React from "react";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import ContactMail from "../contactMail/ContactMail";
import Navigation from "../navigation/Navigation";
import SocialMedias from "../socialMedias/SocialMedias";

const PageHeader = ({ language, positionScrollY }) => {
  return (
    <header>
      <div>
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => window.location.reload(false)}
        ></img>
        <h1>
          MYRIAM MORNET
          <br />
          <span id="header_job"> DEV FRONTEND </span>
        </h1>
      </div>

      <Navigation language={language} positionScrollY={positionScrollY} />

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
