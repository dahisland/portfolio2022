import React from "react";
import { aboutData } from "../../data/sectionsData";

const SectionAbout = ({ language }) => {
  return language === "fr" ? (
    <section id="sectionAbout">
      <h1>{aboutData.titleFR}</h1>
    </section>
  ) : (
    <section id="sectionAbout">
      <h1>{aboutData.titleEN}</h1>
    </section>
  );
};

export default SectionAbout;
