import React from "react";
import avatar from "../../assets/logo512r.png";
import { connect } from "react-redux";
import { ImPencil } from "react-icons/im";
import { EDIT_USER } from "../../actions";

function index({ data, profile, dispatch }) {
  const { fname, lname, email, status, role, phone } = profile;
  return (
    <div className="profile">
      <div className="avatar">
        <img className="aimg" src={avatar} alt="" />
      </div>
      <div className="details">
        <div className="pencil" onClick={() => dispatch({ type: EDIT_USER })}>
          <ImPencil />
        </div>
        <div className="pdetails">
          <h3 className="h3span">First name:</h3> <h3>{fname}</h3>
        </div>
        <div className="pdetails">
          <h3 className="h3span">Last name:</h3> <h3>{lname}</h3>
        </div>
        <div className="pdetails">
          <h3 className="h3span">Email:</h3> <h3>{email}</h3>
        </div>
        <div className="pdetails">
          <h3 className="h3span">Role:</h3> <h3>{role}</h3>
        </div>
        <div className="pdetails">
          <h3 className="h3span">Phone:</h3> <h3>{phone}</h3>
        </div>
        <div className="pdetails">
          <h3 className="h3span">Status:</h3>
          <h3>{status}</h3>
        </div>
      </div>
    </div>
  );
}
const mapStateToprops = (store) => {
  const { profile } = store;
  return { ...store, profile: profile };
};

export default connect(mapStateToprops)(index);
