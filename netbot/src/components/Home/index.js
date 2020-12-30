import React from "react";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Forgot from "../Auth/Forgot";

const login = true;
const forgot = "";

function index() {
  {
    if (login == true) {
      return (
        <div className="main">
          <Login />
        </div>
      );
    } else if (forgot == true) {
      return (
        <div className="main">
          <Forgot />
        </div>
      );
    } else {
      return (
        <div className="main">
          <Register />
        </div>
      );
    }
  }
}

export default index;
