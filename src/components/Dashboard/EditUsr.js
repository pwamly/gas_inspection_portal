import React, { useRef, useState } from "react";
import avatar from "../../assets/logo512r.png";
import { connect } from "react-redux";
import {
  EXIT_VEW_USER,
  EDIT_USER,
  EXIT_EDIT_USER,
  SAVE_UPDATES,
} from "../../actions";
import Edituser from "../Auth/Edituser";

function EditUsr({ viewdata, dispatch, viewuser, edituser, profile, viewusr }) {
  const { id, fname, lname, email, status, role, phone } = viewdata || profile;
  const initial = viewdata || profile;
  const [value, setValue] = useState(initial);

  return (
    <div className="view">
      <div className="uavatar">
        <img className="uimg" src={avatar} alt="" />
      </div>
      {edituser && (
        <form action="" className="edetails">
          <div className="einput">
            <label className="elabel" htmlFor="fname">
              First Name:
            </label>
            <input
              type="text"
              name="username"
              value={value.fname}
              id=""
              onChange={(e) => setValue({ ...value, fname: e.target.value })}
            />
          </div>
          <div className="einput">
            <label className="elabel" htmlFor="lname">
              Last Name:
            </label>
            <input
              type="text"
              name="lname"
              value={value.lname}
              id=""
              onChange={(e) => setValue({ ...value, lname: e.target.value })}
            />
          </div>
          <div className="einput">
            <label className="elabel" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={value.email}
              id=""
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
          </div>
          <div className="einput">
            <label className="elabel" htmlFor="Status">
              Status:
            </label>
            <select
              className="btn"
              name=""
              id=""
              onChange={(e) => setValue({ ...value, status: e.target.value })}
            >
              <option value="Active">Activate</option>
              <option value="Inactive">Deactivate</option>
            </select>
          </div>
          <div className="einput">
            <label className="elabel" htmlFor="role">
              Role:
            </label>
            <input
              type="text"
              name="role"
              value={value.role}
              id=""
              onChange={(e) => setValue({ ...value, role: e.target.value })}
            />
          </div>
          <div className="einput">
            <label className="elabel" htmlFor="phone">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              value={value.phone}
              id=""
              onChange={(e) => setValue({ ...value, phone: e.target.value })}
            />
          </div>
          <div className="vbuttons">
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: EXIT_EDIT_USER });
              }}
            >
              Exit
            </button>
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: SAVE_UPDATES, payload: value });
              }}
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

function mapStateToprops(store) {
  return { ...store };
}

export default connect(mapStateToprops)(EditUsr);
