import React from "react";
import { aboutData } from "../../data/sectionsData";
import ladybird from "../../assets/ladybird.png";
import SectionAboutContent from "./SectionAboutContent";

const SectionAbout = ({ language }) => {
  return language === "fr" ? (
    <section id="sectionAbout">
      <SectionAboutContent data={aboutData.fr} />

      <div className="section_feature"></div>
      <div className="ladybird_container">
        {/* <img src={ladybird} alt="" className="ladybird_img" /> */}
      </div>
    </section>
  ) : (
    <section id="sectionAbout">
      <SectionAboutContent data={aboutData.en} />
      <div className="section_feature"></div>
      <div className="ladybird_container">
        {/* <img src={ladybird} alt="" className="ladybird_img" /> */}
      </div>
    </section>
  );
};

export default SectionAbout;
