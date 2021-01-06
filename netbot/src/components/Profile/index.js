import React from "react";
import avatar from "../../assets/logo512r.png";
import { connect } from "react-redux";
function index({ data }) {
  const { fname, lname, email, status, role } = data[0];
  return (
    <div className="profile">
      <div className="avatar">
        <img className="aimg" src={avatar} alt="" />
      </div>
      <div className="details">
        <h3>First name: {fname}</h3>
        <h3>Last name: {lname}</h3>
        <h3>Email: {email}</h3>
        <h3>Role: {role}</h3>
        <h3 id="h3">Status: {status}</h3>
      </div>
    </div>
  );
}
const mapStateToprops = ({ data }) => {
  return { data };
};

export default connect(mapStateToprops)(index);
