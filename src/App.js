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
import { createStore } from "redux";
import { Provider } from "react-redux";
import { userData, getProfile } from "./client/index";
import reducer from "./reducer";
const data = userData();
const profile = getProfile();
const initialStore = {
  data: data,
  adduser: false,
  edituser: false,
  profile: profile,
  viewuser: false,
  viewusr: false,
  adduserbtn: true,
};
const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
