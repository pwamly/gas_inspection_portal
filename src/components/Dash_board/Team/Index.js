import React, { useMemo } from "react";
import Table from "./Table/Table";
import Adduser from "./Regteam";
import { connect } from "react-redux";
import { ADD_USER } from "../../../actions";

function Index({ adduser }) {
  return (
    <div style={{ height: "600px" }}>{!adduser ? <Table /> : <Adduser />} </div>
  );
}
const MapStateToprops = (store) => {
  return { ...store };
};
export default connect(MapStateToprops)(Index);
