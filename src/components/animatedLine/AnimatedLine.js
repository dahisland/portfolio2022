import React from "react";
import PropTypes from "prop-types";

const AnimatedLine = ({ pathLength }) => {
  return (
    <div className="animatedLine_container">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1552 3914"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          id="svg_pathAnimatedLine"
          d="M66.6914 3910.7C61.0785 3882.26 37.2262 3770.84 37.3979 3716.22C37.5794 3658.47 37.8694 3566.24 87.1798 3480.05C118.382 3425.51 196.203 3357.51 341.502 3350.73C425.826 3346.8 532.878 3363.49 666.733 3415.4C1031.23 3556.76 1465.03 3672.95 1466.04 3350.59C1467.05 3028.23 459.591 2804.13 460.87 2397.3C462.149 1990.47 1547.11 1976.77 1548.5 1532.01C1549.63 1173.45 7.37867 1129.91 2.72792 903.801C-1.92283 677.696 940.888 625.308 1148.72 533.808C1422.81 413.138 1218.32 157.772 1197.94 113.186C1168.95 49.7485 1201.3 13.2027 1221.1 2.85953"
          stroke="#7EEB9D"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

AnimatedLine.propTypes = {
  pathLength: PropTypes.number,
};

export default AnimatedLine;
