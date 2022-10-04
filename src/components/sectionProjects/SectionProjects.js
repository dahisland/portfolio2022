import React from "react";
import { projectsData } from "../../data/sectionsData";

const SectionProjects = ({ language }) => {
  return language === "fr" ? (
    <section id="sectionProjects">
      <h1>{projectsData.titleFR}</h1>
    </section>
  ) : (
    <section id="sectionProjects">
      <h1>{projectsData.titleEN}</h1>
    </section>
  );
};

export default SectionProjects;
