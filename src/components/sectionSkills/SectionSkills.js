import React from "react";
import PropTypes from "prop-types";

const SectionSkills = ({ data }) => {
  return (
    <section id="sectionSkills">
      <div className="section_content">
        <h1>{data.title}</h1>
      </div>
      <div className="section_feature"></div>
    </section>
  );
};

SectionSkills.propTypes = {
  data: PropTypes.object,
};

export default SectionSkills;
