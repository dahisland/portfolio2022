import React from "react";
import PropTypes from "prop-types";

const SectionCareer = ({ data }) => {
  return (
    <section id="sectionCareer">
      <div className="section_content">
        <h1>{data.title}</h1>
      </div>
      <div className="section_feature"></div>
    </section>
  );
};

SectionCareer.propTypes = {
  data: PropTypes.object,
};

export default SectionCareer;
