import React from "react";
import { socialMediasData } from "../../data/headerData";

const SocialMedias = () => {
  return (
    <div className="contact_socialMedias">
      {socialMediasData.map((item) => (
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          alt={item.label}
          id={item.id}
          key={"socialMedia" + item.label}
        >
          <svg xmlns={item.xmlns} viewBox={item.viewport}>
            {item.paths.map((path, index) => (
              <path
                key={"pathSvgSocialMedia" + item.label + index}
                d={path.d}
                transform={path.transform}
              />
            ))}
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SocialMedias;
