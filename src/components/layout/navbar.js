import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};
navbar.propType = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default navbar;
