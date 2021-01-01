import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectRoute } from "./components/ProtectRoute";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
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
            <Route path="*" component={() => <h2> 404 Not Found </h2>} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
