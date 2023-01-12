import React from "react";
import PropTypes from "prop-types";

const SectionProjectsFigure = ({
  dataGallery,
  indexGallery,
  slide,
  setSlide,
}) => {
  const randomClassTags = [
    "galleryCaption_tags--purple",
    "galleryCaption_tags--purple-fill",
    "galleryCaption_tags--white",
    "galleryCaption_tags--white-fill",
    "galleryCaption_tags--blue",
    "galleryCaption_tags--blue-fill",
    "galleryCaption_tags--gold-fill",
    "galleryCaption_tags--gold",
  ];

  return (
    <figure
      className={`projectsGallery_container`}
      slide={slide}
      onAnimationEnd={() => setSlide(0)}
    >
      <picture className="projectsGallery_picture">
        <img
          src={process.env.PUBLIC_URL + "/img/" + dataGallery[indexGallery].url}
          alt={dataGallery[indexGallery].name}
        />
      </picture>
      <figcaption className="projectsGallery_caption">
        <div className="galleryCaption_description">
          <h2>{dataGallery[indexGallery].name}</h2>
          {dataGallery[indexGallery].tags.map((item) => (
            <span
              key={dataGallery[indexGallery].name + item}
              className={
                "galleryCaption_tags" +
                " " +
                randomClassTags[
                  Math.floor(Math.random() * randomClassTags.length)
                ]
              }
            >
              {item.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="galleryCaption_links">
          <a
            href={dataGallery[indexGallery].github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href={dataGallery[indexGallery].view}
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        </div>
      </figcaption>
    </figure>
  );
};

SectionProjectsFigure.propTypes = {
  dataGallery: PropTypes.array,
  indexGallery: PropTypes.number,
  slide: PropTypes.number,
  setSlide: PropTypes.func,
};

export default SectionProjectsFigure;
