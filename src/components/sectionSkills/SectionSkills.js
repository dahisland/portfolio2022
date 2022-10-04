import React from "react";
import { skillsData } from "../../data/sectionsData";

const SectionSkills = ({ language }) => {
  return language === "fr" ? (
    <section id="sectionSkills">
      <h1>{skillsData.titleFR}</h1>
    </section>
  ) : (
    <section id="sectionSkills">
      <h1>{skillsData.titleEN}</h1>
    </section>
  );
};

export default SectionSkills;
