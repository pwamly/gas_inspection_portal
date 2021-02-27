import React from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { ProtectRoute } from "./components/ProtectRoute";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
// import Dashboard from "./components/Dash_board"; for testing only
import { ToastProvider } from "react-toast-notifications";
import { userData, getProfile } from "./client/index";
import { store } from "./store";
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
              </Route>
              <ProtectRoute
                path="/dashboard"
                component={Dashboard}
              ></ProtectRoute>
              <ProtectRoute path="/" component={Dashboard}></ProtectRoute>
              <Redirect exact to="/" />
              <Route path="*" component={() => <h2> 404 Not Found </h2>} />
            </Switch>
          </Router>
        </div>
      </ToastProvider>
    </Provider>
  );
}

export default App;
