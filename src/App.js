import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import SectionAbout from "./components/sectionAbout/SectionAbout";
import SectionProjects from "./components/sectionProjects/SectionProjects";
import SectionSkills from "./components/sectionSkills/SectionSkills";
import AnimatedLine from "./components/animatedLine/AnimatedLine";
import PageHeader from "./components/pageHeader/PageHeader";
import SwitchLanguage from "./components/switchLanguage/SwitchLanguage";
import SectionCareer from "./components/sectionCareer/SectionCareer";
import BtnScrollToTop from "./components/btnScrollToTop/BtnScrollToTop";

function App() {
  const [pathLength, setPathLength] = useState(0);
  const [language, setLanguage] = useState("fr");
  const [positionScrollY, setPositionScrollY] = useState(0);

  function animOnLoad() {
    window.scrollTo(0, document.body.scrollHeight);
    animateScroll.scrollTo(0, {
      duration: 5000,
      delay: 500,
      smooth: "easeInOutQuad",
    });
  }

  useEffect(() => {
    // Scrolling Animation onload
    animOnLoad();
    // Collect svg line length to animate line using dasharray in component animatedLine
    const svgPathLength = document
      .getElementById("svg_pathAnimatedLine")
      .getTotalLength();
    setPathLength(svgPathLength);
    // Event on scroll
    document.addEventListener("scroll", (e) => {
      setPositionScrollY(window.scrollY);
    });
  }, [pathLength]);

  return (
    <div className="page_container">
      {language === "fr" ? (
        <SwitchLanguage lang={language} setLanguage={() => setLanguage("en")} />
      ) : (
        <SwitchLanguage lang={language} setLanguage={() => setLanguage("fr")} />
      )}

      <PageHeader language={language} positionScrollY={positionScrollY} />

      {positionScrollY >= 1 ? <BtnScrollToTop /> : null}

      <main>
        <AnimatedLine pathLength={pathLength} />
        <SectionAbout language={language} />
        <SectionProjects language={language} />
        <SectionSkills language={language} />
        <SectionCareer language={language} />
      </main>
    </div>
  );
}

export default App;
