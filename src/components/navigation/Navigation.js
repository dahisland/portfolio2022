import PropTypes from "prop-types";
import { Link } from "react-scroll";

const Navigation = ({ data, positionScrollY, windowHeight }) => {
  const toggleActiveClass = (item) =>
    positionScrollY + item.position >=
      windowHeight * item.position - windowHeight &&
    positionScrollY + item.position < windowHeight * item.position
      ? "navLink--active"
      : "navLink";

  return (
    <nav className="header_navigation">
      <ul className="navigation_navLinks">
        {data.map((item) => (
          <li key={item.name + item.position}>
            <Link
              className={toggleActiveClass(item)}
              to={item.linkTo}
              smooth={true}
              duration={400}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  data: PropTypes.array,
  positionScrollY: PropTypes.number,
  windowHeight: PropTypes.number,
};

export default Navigation;
