import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Repos from "../repos/repos";

const User = props => {
  useEffect(() => {
    props.getUser(props.match.params.login);
    props.getUserRepos(props.match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = props.user;
  return (
    <React.Fragment>
      <Link to="/" className="btn btn-light">
        Back to Home
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: 200 }}
          />
          <h3>{name}</h3>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <React.Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </React.Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            {company && (
              <Fragment>
                <li>
                  <strong>Company: </strong>
                  {company}
                </li>
              </Fragment>
            )}
            {blog && (
              <Fragment>
                <li>
                  <strong>Blog: </strong>
                  {blog}
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
      <div className="card my-1">
        {public_repos && (
          <Fragment>
            <Link to="/">public Repos</Link>{" "}
          </Fragment>
        )}
      </div>
      <div className="card my-3">
        {public_repos && (
          <Fragment>
            <Repos repos={props.repos} getUserRepos={props.getUserRepos} />
          </Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default User;
