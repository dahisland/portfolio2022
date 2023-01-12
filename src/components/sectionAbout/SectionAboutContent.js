import React from "react";
import PropTypes from "prop-types";

const SectionAboutContent = ({ data }) => {
  return (
    <div className="section_content">
      <h1>{data.title}</h1>
      {data.content.map((item, index) => (
        <p key={data.key + index}>{item}</p>
      ))}
    </div>
  );
};

SectionAboutContent.propTypes = {
  data: PropTypes.object,
};

export default SectionAboutContent;
