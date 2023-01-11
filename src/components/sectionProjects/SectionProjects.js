import React from "react";
import { projectsData } from "../../data/sectionsData";

const SectionProjects = ({ language }) => {
  return language === "fr" ? (
    <section id="sectionProjects">
      <div className="section_content">
        <h1>{projectsData.titleFR}</h1>
      </div>
      <div className="section_feature"></div>
    </section>
  ) : (
    <section id="sectionProjects">
      <div className="section_content">
        <h1>{projectsData.titleEN}</h1>
      </div>
      <div className="section_feature"></div>
    </section>
  );
};

export default SectionProjects;
