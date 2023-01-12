import React from "react";
import PropTypes from "prop-types";
import SectionAboutContent from "./SectionAboutContent";

const SectionAbout = ({ data }) => {
  return (
    <section id="sectionAbout">
      <SectionAboutContent data={data} />

      <div className="section_feature"></div>
      <div className="ladybird_container"></div>
    </section>
  );
};

SectionAbout.propTypes = {
  data: PropTypes.object,
};

export default SectionAbout;
