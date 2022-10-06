import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { navData } from "../../data/headerData";

const Navigation = ({ language, positionScrollY }) => {
  // Collect height of window to define zones of each section
  const windowHeight = window.innerHeight;

  const toggleActiveClass = (item) =>
    positionScrollY < windowHeight * item.position &&
    positionScrollY >= windowHeight * item.position - windowHeight
      ? "navLink--active"
      : "navLink";

  return (
    <nav>
      <ul className="navigation_navLinks">
        {navData.map((item) =>
          language === "fr" ? (
            <li key={item.nameFR + item.position}>
              <Link
                className={toggleActiveClass(item)}
                to={item.linkTo}
                smooth={true}
                duration={400}
                offset={1}
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
                offset={1}
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
