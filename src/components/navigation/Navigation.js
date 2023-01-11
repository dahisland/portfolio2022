import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { navData } from "../../data/headerData";

const Navigation = ({ language, positionScrollY, windowHeight }) => {
  // const toggleActiveClass = (item) =>
  //   positionScrollY + item.position >= windowHeight * item.position &&
  //   positionScrollY + item.position <
  //     windowHeight * item.position + windowHeight
  //     ? "navLink--active"
  //     : "navLink";

  const toggleActiveClass = (item) =>
    positionScrollY + item.position >=
      windowHeight * item.position - windowHeight &&
    positionScrollY + item.position < windowHeight * item.position
      ? "navLink--active"
      : "navLink";

  return (
    <nav className="header_navigation">
      <ul className="navigation_navLinks">
        {navData.map((item) =>
          language === "fr" ? (
            <li key={item.nameFR + item.position}>
              <Link
                className={toggleActiveClass(item)}
                to={item.linkTo}
                smooth={true}
                duration={400}
                // offset={1}
                // isDynamic={true}
              >
                {item.nameFR}
              </Link>
            </li>
          ) : (
            <li key={item.nameEN + item.position} lang="en">
              <Link
                className={toggleActiveClass(item)}
                to={item.linkTo}
                smooth={true}
                duration={400}
                // offset={1}
                // isDynamic={true}
              >
                {item.nameEN}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  language: PropTypes.string,
  activeNavLinkId: PropTypes.string,
  setActiveNavLinkId: PropTypes.func,
};

export default Navigation;
