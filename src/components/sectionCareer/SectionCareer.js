import React from "react";
import { careerData } from "../../data/sectionsData";

const SectionCareer = ({ language }) => {
  return language === "fr" ? (
    <section id="sectionCareer">
      <h1>{careerData.titleFR}</h1>
    </section>
  ) : (
    <section id="sectionCareer">
      <h1>{careerData.titleEN}</h1>
    </section>
  );
};

export default SectionCareer;
