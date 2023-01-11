import React, { useEffect, useState } from "react";
import SectionAbout from "./components/sectionAbout/SectionAbout";
import SectionProjects from "./components/sectionProjects/SectionProjects";
import SectionSkills from "./components/sectionSkills/SectionSkills";
import PageHeader from "./components/pageHeader/PageHeader";
import SwitchLanguage from "./components/switchLanguage/SwitchLanguage";
import SectionCareer from "./components/sectionCareer/SectionCareer";
import BtnScrollToTop from "./components/btnScrollToTop/BtnScrollToTop";

function App() {
  // const [pathLength, setPathLength] = useState(0);
  const [language, setLanguage] = useState("fr");
  const [positionScrollY, setPositionScrollY] = useState(0);

  // Collect height of browser window to define zones of each section
  const windowHeight = window.innerHeight;

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      setPositionScrollY(parseInt(window.scrollY));
    });
  }, [positionScrollY]);

  return (
    <div className="page_container">
      {language === "fr" ? (
        <SwitchLanguage lang={language} setLanguage={() => setLanguage("en")} />
      ) : (
        <SwitchLanguage lang={language} setLanguage={() => setLanguage("fr")} />
      )}

      <PageHeader
        language={language}
        positionScrollY={positionScrollY}
        windowHeight={windowHeight}
      />

      {positionScrollY >= 1 ? <BtnScrollToTop /> : null}

      <main>
        <SectionAbout language={language} />
        <SectionProjects language={language} />
        <SectionSkills language={language} />
        <SectionCareer language={language} />
      </main>
    </div>
  );
}

export default App;
