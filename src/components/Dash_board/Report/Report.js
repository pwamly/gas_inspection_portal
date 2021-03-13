import React from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Table from "./Table/Table";
import VehicleReg from "../Registration/index";
import PrintForm from "../Printform/Printform";
import Pdf from "../../Pdf/Pdf";

function Report() {
  const table = false;
  const editdata = true;
  const viewdata = false;
  return (
    <Router>
      <Switch>
        <Route path="/dashboard/reports" exact component={Table} />{" "}
        <Route path="/dashboard/reports/edit" component={VehicleReg} />{" "}
        <Route path="/dashboard/reports/view" component={PrintForm} />{" "}
      </Switch>{" "}
    </Router>
  );
}

export default Report;
