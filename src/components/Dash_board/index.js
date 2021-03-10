import React from "react";
import Navbar from "./Navibar/index";
import { IconContext } from "react-icons";
import Container from "@material-ui/core/Container";
import Footer from "../Footer/Footer";
import "./dashbar.css";
import RegistrationForm from "./Registration";
import { ProtectRoute } from "../../components/ProtectRoute";
import Regform from "../Pdf/Pdf";
import Printform from "../Dash_board/Printform/Printform";
import Spline from "./Charts/Spline";
import Profile from "../Dash_board/Profile/Profile";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function Index({ modalShown, toggleModal }) {
  return (
    <>
      {/* <Profile /> */}
      <IconContext.Provider value={{ color: "#fff" }}>
        <Router>
          <Navbar>
            <Profile
              shown={true}
              close={() => {
                toggleModal(false);
              }}
            >
              <h1>Look! I'm inside the modal!</h1>
            </Profile>
          </Navbar>
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

export default Index;
