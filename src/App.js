import React from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { ProtectRoute } from "./components/ProtectRoute";

import Home from "./components/Home";
import Form from "./components/Forms/Stepform/ForgotPassword/ForgotPasswordForm";
// import Dashboard from "./components/Dashboard";
import Dashboard from "./components/Dash_board";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { userData, getProfile } from "./client/index";
import { store } from "./store";
import Pdf from "./components/Pdf/Pdf";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ToastProvider placement="top-center">
        <div className="site">
          <Router>
            <Switch>
              <Route exact path="/login">
                <Home />
              </Route>{" "}
              <Route exact path="/form">
                <Pdf />
              </Route>{" "}
              <ProtectRoute
                path="/dashboard"
                exact
                component={Dashboard}
              ></ProtectRoute>{" "}
              <ProtectRoute path="/dashboard" component={Dashboard}>
                {" "}
              </ProtectRoute>{" "}
              <Redirect exact to="/dashboard" />
              <Route path="*" component={() => <h2> 404 Not Found </h2>} />
            </Switch>{" "}
          </Router>{" "}
        </div>{" "}
      </ToastProvider>{" "}
    </Provider>
  );
}

export default App;
