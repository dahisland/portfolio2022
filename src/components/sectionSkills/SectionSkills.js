import React from "react";
import { skillsData } from "../../data/sectionsData";

const SectionSkills = ({ language }) => {
  return language === "fr" ? (
    <section id="sectionSkills">
      <div className="section_content">
        <h1>{skillsData.titleFR}</h1>
      </div>
      <div className="section_feature"></div>
    </section>
  ) : (
    <section id="sectionSkills">
      <div className="section_content">
        <h1>{skillsData.titleEN}</h1>
      </div>
      <div className="section_feature"></div>
    </section>
  );
};

export default SectionSkills;
