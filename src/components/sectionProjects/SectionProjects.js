import React, { useState } from "react";
import { projectsData } from "../../data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareRight,
  faCaretSquareLeft,
} from "@fortawesome/free-solid-svg-icons";

const SectionProjects = ({ language }) => {
  const [indexGallery, setIndexGallery] = useState(0);
  const dataGalleryFR = projectsData.fr.gallery.sort(function (a, b) {
    return a.order - b.order;
  });
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

  return language === "fr" ? (
    <section id="sectionProjects">
      <div className="section_content">
        <h1>{projectsData.fr.title}</h1>
        <div className="sectionProjects_gallery">
          <FontAwesomeIcon
            icon={faCaretSquareLeft}
            className="projectsGallery_icons"
            onClick={() =>
              indexGallery !== 0
                ? setIndexGallery(indexGallery - 1)
                : setIndexGallery(dataGalleryFR.length - 1)
            }
          />
          <figure className="projectsGallery_container">
            <picture className="projectsGallery_picture">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/img/" +
                  dataGalleryFR[indexGallery].url
                }
                alt={dataGalleryFR[indexGallery].name}
              />
            </picture>
            <figcaption className="projectsGallery_caption">
              <div className="galleryCaption_description">
                <h2>{dataGalleryFR[indexGallery].name}</h2>
                {dataGalleryFR[indexGallery].tags.map((item) => (
                  <span
                    key={dataGalleryFR[indexGallery].name + item}
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
                  href={dataGalleryFR[indexGallery].github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={dataGalleryFR[indexGallery].view}
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </div>
            </figcaption>
          </figure>
          <FontAwesomeIcon
            icon={faCaretSquareRight}
            className="projectsGallery_icons"
            onClick={() =>
              indexGallery !== dataGalleryFR.length - 1
                ? setIndexGallery(indexGallery + 1)
                : setIndexGallery(0)
            }
          />
          <div className="projectsGallery_counter">
            {indexGallery + 1 + "/" + dataGalleryFR.length}
          </div>
        </div>
      </div>
      <div className="section_feature"></div>
    </section>
  ) : (
    <section id="sectionProjects">
      <div className="section_content">
        <h1>{projectsData.en.title}</h1>
      </div>
      <div className="section_feature"></div>
    </section>
  );
};

export default SectionProjects;
