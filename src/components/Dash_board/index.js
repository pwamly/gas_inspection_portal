import React, { useEffect } from "react";
import Navbar from "./Navibar/index";
import { IconContext } from "react-icons";
import Container from "@material-ui/core/Container";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { getUserId, httpActions } from "../../client/index";
import { useGet } from "../../hooks";
import "./dashbar.css";
import RegistrationForm from "./Registration";
import { ProtectRoute } from "../../components/ProtectRoute";
import Regform from "../Pdf/Pdf";
import Printform from "../Dash_board/Printform/Printform";
import Spline from "./Charts/Spline";
import Profile from "../Dash_board/Profile/Profile";
import { SAVE_INITIAL_DATA } from "../../actions";

import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const { getProfile } = httpActions;

function Index({ modalShown, toggleModal, showProfile, dispatch }) {
  let initial;
  const vendorId = getUserId();
  const { result: user, loading, refresh } = useGet(vendorId, getProfile);
  const { fname, lname, email, username, phone, userRole } = user || {};

  if (fname && lname) {
    initial = `${fname} ${lname}`
      .split(" ")
      .map((n, i, a) => (i === 0 || i + 1 === a.length ? n[0] : null))
      .join("")
      .toUpperCase();
  }

  useEffect(() => {
    dispatch({
      type: SAVE_INITIAL_DATA,
      payload: { fname, lname, email, username, phone, userRole, initial },
    });
  }, [user]);

  return (
    <>
      {" "}
      {showProfile && <Profile />}
      <IconContext.Provider value={{ color: "#fff" }}>
        <Router>
          <Navbar props={initial} />
          <Container className="dashboard">
            <Switch>
              <ProtectRoute path="/dashboard" exact component={Spline} />{" "}
              <ProtectRoute
                path="/dashboard/registration"
                exact
                component={RegistrationForm}
              />{" "}
              <ProtectRoute path="/kjjkl" component={RegistrationForm} />{" "}
            </Switch>{" "}
          </Container>{" "}
        </Router>{" "}
        <Footer />{" "}
      </IconContext.Provider>{" "}
    </>
  );
}
const mapStateToprops = (store) => {
  return { ...store };
};

export default connect(mapStateToprops)(Index);
