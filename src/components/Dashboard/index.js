import React from "react";
import Head from "../Head/Dashboard";
import Profile from "../Profile";
import Cards from "./Cards";
import Regform from "../Auth/Adduser";
import { connect } from "react-redux";
import ViewUser from "./ViewUser";
import EditUsr from "./EditUsr";

function index({ edituser, adduser, viewuser }) {
  return (
    <div className="dash">
      <Head />
      <div className="main-dash">
        <Profile />
        <Cards>
          {adduser && (
            <div className="addform">
              <Regform />
            </div>
          )}{" "}
          {viewuser && (
            <div className="viewuser">
              <ViewUser />
            </div>
          )}{" "}
          {edituser && (
            <div className="viewuser">
              <EditUsr />
            </div>
          )}{" "}
        </Cards>{" "}
      </div>{" "}
    </div>
  );
}

function mapStateToprops(store) {
  return { ...store };
}

export default connect(mapStateToprops)(index);
