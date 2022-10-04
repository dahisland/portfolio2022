import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { navData } from "../../data/headerData";

const Navigation = ({ language, activeNavLinkId, setActiveNavLinkId }) => {
  const handleClick = (navLinkId) => {
    setActiveNavLinkId(navLinkId);
  };

  return (
    <nav>
      <ul className="navigation_navLinks">
        {navData.map((item) =>
          language === "fr" ? (
            <li key={item.nameFR + item.position}>
              <Link
                id={item.id}
                className={
                  activeNavLinkId === item.id ? "navLink--active" : "navLink"
                }
                onClick={() => handleClick(item.id)}
                to={item.linkTo}
                smooth={true}
                duration={400}
                isDynamic={true}
              >
                {item.nameFR}
              </Link>
            </li>
          ) : (
            <li key={item.nameEN + item.position} lang="en">
              <Link
                id={item.id}
                className={
                  activeNavLinkId === item.id ? "navLink--active" : "navLink"
                }
                onClick={() => handleClick(item.id)}
                to={item.linkTo}
                smooth={true}
                duration={400}
                isDynamic={true}
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
