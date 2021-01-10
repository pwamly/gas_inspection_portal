import React from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
const login = false;
function index() {
  {
    if (login) {
      return <Dashboard />;
    } else {
      return <Home />;
    }
  }
}
export default index;
