import React, { useEffect, useState } from "react";
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
  // for navigation
  const [activeNavLinkId, setActiveNavLinkId] = useState("navLink_about");

  useEffect(() => {
    const svgPathLength = document
      .getElementById("svg_pathAnimatedLine")
      .getTotalLength();
    setPathLength(svgPathLength);
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

      <PageHeader
        language={language}
        activeNavLinkId={activeNavLinkId}
        setActiveNavLinkId={setActiveNavLinkId}
      />

      {positionScrollY !== 0 ? <BtnScrollToTop /> : null}

      <main>
        <AnimatedLine pathLength={pathLength} />
        <SectionAbout />
        <SectionProjects />
        <SectionSkills />
        <SectionCareer />
      </main>
    </div>
  );
}

export default App;
