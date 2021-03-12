import React from "react";
import avatar from "../../assets/logo512r.png";
import { connect } from "react-redux";
import { ImPencil } from "react-icons/im";
import { EDIT_USER } from "../../actions";
import { httpActions, getUserId } from "../../client";
import { useGet } from "../../hooks";

const { getProfile } = httpActions;

function Index({ data, profile, dispatch }) {
  const id = getUserId();

  const { result: user, loading, refresh } = useGet(id, getProfile);

  return user ? (
    <div className="profile">
      <div className="avatar">
        <img className="aimg" src={avatar} alt="" />
      </div>
      <div className="details">
        <div className="pencil" onClick={() => dispatch({ type: EDIT_USER })}>
          <ImPencil />
        </div>
        <div className="pdetails">
          <h3 className="h3span">First name:</h3> <h3>{user.fname}</h3>
        </div>
        <div className="pdetails">
          <h3 className="h3span">Last name:</h3> <h3>{user.lname}</h3>
        </div>
        <div className="pdetails">
          <h3 className="h3span">Email:</h3> <h3>{user.email}</h3>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
const mapStateToprops = (store) => {
  const { profile } = store;
  return { ...store, profile: profile };
};

export default connect(mapStateToprops)(Index);
