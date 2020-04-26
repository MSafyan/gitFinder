import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const userItem = ({ user: { id, avatar_url, html_url, login } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={login}
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};
userItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default userItem;
