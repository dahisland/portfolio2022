import React from "react";

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

export default SectionAboutContent;
