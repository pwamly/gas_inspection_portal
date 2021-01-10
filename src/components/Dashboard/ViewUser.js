import React, { useRef, useState } from "react";
import avatar from "../../assets/logo512r.png";
import { connect } from "react-redux";
import { EXIT_VEW_USER, EDIT_USER } from "../../actions";

function ViewUser({ viewdata, dispatch, viewuser, edituser, viewusr }) {
  const { id, fname, lname, email, status, role, phone } = viewdata;
  const [value, setValue] = useState(viewdata);

  return (
    <div className="view">
      <div className="uavatar">
        <img className="uimg" src={avatar} alt="" />
      </div>
      <div className="udetails">
        <h4>
          User name : {fname}-{lname}
        </h4>
        <h4>Email : {email}</h4>
        <h4>Status : {status}</h4>
        <h4>Role : {role}</h4>
        <h4>Phone : {phone}</h4>
      </div>
      <div className="vbuttons">
        <button
          className="btn"
          onClick={() => dispatch({ type: EXIT_VEW_USER })}
        >
          Exit
        </button>
        <button
          className="btn"
          onClick={() =>
            dispatch({ type: EDIT_USER, payload: { edit: "profile" } })
          }
        >
          Edit
        </button>
      </div>
    </div>
  );
}
function mapStateToprops(store) {
  return { ...store };
}

export default connect(mapStateToprops)(ViewUser);
