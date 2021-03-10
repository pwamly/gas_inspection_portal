import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { getUserId, httpActions } from "../../../client/index";
import "./profile.css";
import { connect } from "react-redux";
import { useGet } from "../../../hooks";
const { getProfile } = httpActions;

function Profile({ profile }) {
  const style = { display: "flex", flexDirection: "row", fontWeight: "bold" };
  const { fname, initial, lname, email, username, phone, userRole } =
    profile || {};

  return (
    <Card
      variant="outlined "
      style={{
        marginTop: "10px",
        position: "absolute",
        left: "50%",
        top: "50%",
        fontFamily: "sans-serif",
        transform: "translate(-50%, -50%)",
        width: "35%",
        minWidth: "300px",
        zIndex: "1",
        height: "500px",
        borderRadius: "16px",
      }}
    >
      <div className="pavata">
        <div className="avata">
          <span className="initialzoomp"> {initial} </span>{" "}
        </div>{" "}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "50px",
          gap: "16px",
        }}
      >
        <span style={style}>
          Name:{" "}
          <span style={{ fontWeight: "normal" }}> {fname + "   " + lname}</span>{" "}
        </span>{" "}
        <span style={style}>
          Email: <span style={{ fontWeight: "normal" }}>{email}</span>{" "}
        </span>{" "}
        <span style={style}>
          Phone: <span style={{ fontWeight: "normal" }}> {phone}</span>{" "}
        </span>{" "}
        <span style={style}>
          Role: <span style={{ fontWeight: "normal" }}> {userRole} </span>{" "}
        </span>{" "}
      </div>{" "}
    </Card>
  );
}
const MapStateToprops = (store) => {
  return { ...store };
};
export default connect(MapStateToprops)(Profile);
