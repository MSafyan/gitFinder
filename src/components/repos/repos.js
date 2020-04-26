import React from "react";
import ReposItem from "../repos/reposItem";

const repos = ({ repos }) => {
  return repos.map(repo => {
    return <ReposItem repo={repo} key={repo.id} />;
  });
};

export default repos;
