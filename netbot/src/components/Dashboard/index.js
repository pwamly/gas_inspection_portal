import React from "react";
import Head from "../Head/Dashboard";
import Profile from "../Profile";
import Cards from "./Cards";
import Regform from "../Auth/Adduser";

function index() {
  return (
    <div className="dash">
      <Head />
      <div className="main-dash">
        <Profile />
        <Cards>
          <div className="addform">
            <Regform />
          </div>
        </Cards>
      </div>
    </div>
  );
}

export default index;
