import React, { useState, Component, Fragment, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/navbar";
import Users from "./components/users/Users";
import User from "./components/users/user";
import Search from "./components/layout/search";
import Alert from "./components/layout/alert";
import About from "./components/layout/about";

const App = () => {
  // state = {
  //   users: [],
  //   repos: [],
  //   loading: false,
  //   user: {},
  //   alert: null
  // };

  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState([]);
  const [user, setUser] = useState([]);
  const [alert, setAlert] = useState([]);
  const [showClearButton, setShowClearButton] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data);
    setLoading(false);
    setShowClearButton(true);
  }, []);

  // async componentDidMount() {
  //   this.setState({
  //     loading: true
  //   });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // console.log(typeof res.data);
  //   this.setState({
  //     // text: "",
  //     users: res.data,
  //     loading: false,
  //     showClearButton: false
  //   });
  // }

  const searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    // this.setState({
    //   users: res.data.items,
    //   showClearButton: false,
    //   loading: false
    // });
    setUsers(res.data.items);
    setShowClearButton(false);
    setLoading(false);
  };
  const getUser = async login => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // this.setState({
    //   user: res.data,
    //   loading: false
    // });
    setUser(res.data);
    setLoading(false);
  };
  const getUserRepos = async login => {
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // this.setState({ repos: res.data });
    setRepos(res.data);
  };
  const clearUsers = () => {
    // this.setState({ users: [] });
    setUsers([]);
  };
  const showAlert = (msg, type) => {
    // this.setState({ alert: { msg: msg, type: type } });
    setAlert({ msg, type });
  };
  const loadAlert = () => {
    setTimeout(() => {
      // this.setState({ alert: null });
      setAlert(null);
    }, 5000);
    if (alert !== null) {
      return <Alert alert={alert}></Alert>;
    }
  };

  return (
    <Router>
      <div>
        <Navbar title="Github Finder" icon="fab fa-github" />
        {loadAlert()}
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClearButton={showClearButton}
                    setAlert={showAlert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  loading={loading}
                  user={user}
                  repos={repos}
                  getUserRepos={getUserRepos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
