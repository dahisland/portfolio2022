import React from "react";
import { animateScroll } from "react-scroll";

const BtnScrollToTop = () => {
  const goToTopOnclick = (e) => {
    animateScroll.scrollToTop();
    e.target.classList.add("btn_goToTop--hide");
  };
  return (
    <button className="btn_goToTop" onClick={(e) => goToTopOnclick(e)}>
      ↑
    </button>
  );
};

export default BtnScrollToTop;
