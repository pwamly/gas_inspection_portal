import React, { useState } from "react";
import avatar from "../../assets/logo512r.png";
import { connect } from "react-redux";
import { ADD_USER, ADD_USER_FORM, REMOVE_USER } from "../../actions";
import { FaEye, FaRegEye, FaTrash } from "react-icons/fa";
import Carditem from "./Carditem";

function Cards({ user = [], adduser, dispatch, children, remove }) {
  return (
    <div className="cards">
      {!(user.length === 0) ? (
        user.map((item) => <Carditem {...item} key={item.id} />)
      ) : (
        <div className="nouser">
          <h3>No user yet</h3>
        </div>
      )}
      {adduser && children}
      <div className="cbtn">
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: ADD_USER_FORM });
          }}
        >
          Add User
        </button>
      </div>
    </div>
  );
}
function mapStateToprops(store) {
  const { data, adduser } = store;
  return { ...store, user: data, adduser: adduser };
}

export default connect(mapStateToprops)(Cards);
