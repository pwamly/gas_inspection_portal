import React from "react";
import avatar from "../../assets/logo512r.png";
import { connect } from "react-redux";
import { ImPencil } from "react-icons/im";

function index({ data, profile }) {
  const { fname, lname, email, status, role } = profile;
  return (
    <div className="profile">
      <div className="avatar">
        <img className="aimg" src={avatar} alt="" />
      </div>
      <div className="details">
        <div className="pencil">
          <ImPencil />
        </div>
        <h3>First name: {fname}</h3>
        <h3>Last name: {lname}</h3>
        <h3>Email: {email}</h3>
        <h3>Role: {role}</h3>
        <h3 id="h3">Status: {status}</h3>
      </div>
    </div>
  );
}
const mapStateToprops = (store) => {
  const { profile } = store;
  return { ...store, profile: profile };
};

export default connect(mapStateToprops)(index);
