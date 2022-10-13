import React from "react";
import PropTypes from "prop-types";

const AnimLadyBird = ({ cx, cy, rx, ry, colorFill, values }) => {
  return (
    <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={colorFill}>
      <animate
        attributeName="ry"
        values={values}
        dur="400ms"
        fill="freeze"
        from="0"
        to="100"
        begin="5500ms"
      ></animate>
      <animateMotion
        dur="5s"
        fill="freeze"
        // calcMode={"paced"}
        from="0"
        to="100"
        begin="500ms"
        rotate={"auto"}
      >
        <mpath xlinkHref="#svg_pathAnimatedLine" />
      </animateMotion>
    </ellipse>
  );
};

AnimLadyBird.propTypes = {
  cx: PropTypes.string,
  cy: PropTypes.string,
  rx: PropTypes.string,
  ry: PropTypes.string,
  colorFill: PropTypes.string,
  values: PropTypes.string,
};

export default AnimLadyBird;
