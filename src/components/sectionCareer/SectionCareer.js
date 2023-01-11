import React from "react";
import { careerData } from "../../data/sectionsData";

const SectionCareer = ({ language }) => {
  return language === "fr" ? (
    <section id="sectionCareer">
      <div className="section_content">
        <h1>{careerData.titleFR}</h1>
      </div>
      <div className="section_feature"></div>
    </section>
  ) : (
    <section id="sectionCareer">
      <div className="section_content">
        <h1>{careerData.titleEN}</h1>
      </div>
      <div className="section_feature"></div>
    </section>
  );
};

export default SectionCareer;
