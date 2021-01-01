import React from "react";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Forgot from "../Auth/Forgot";
import Head from "../Head";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const login = true;
const forgot = "";

function index() {
  return (
    <>
      <Head />
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/reset-password">
              <Forgot />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default index;
