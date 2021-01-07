import React, { useState } from "react";
import avatar from "../../assets/logo512r.png";
import { connect } from "react-redux";
import { ADD_USER, ADD_USER_FORM } from "../../actions";
import { FaEye, FaRegEye, FaTrash } from "react-icons/fa";

function Cards({ user = [], adduser, dispatch, children, ownProps }) {
  console.log("user", user.length);
  return (
    <div className="cards">
      {!(user.length === 0) ? (
        user.map((item) => (
          <div className="card-items">
            <div className="eye">
              <FaRegEye />
            </div>
            {console.log("mmmmmmmmmmmm", ownProps)}
            <div className="delete">
              <FaTrash onClick={dispatch} />
            </div>
            <h3 className="username">
              Username: {item.fname + " " + item.lname}
            </h3>
            <h3 className="status">Status: {item.status}</h3>
            <div className="cavatar">
              <img className="cardimg" src={avatar} alt="" />
            </div>
          </div>
        ))
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
function mapStateToprops(store, ownProps) {
  const { data, adduser } = store;
  return { ...store, user: data, adduser: adduser, ownProps };
}
export default connect(mapStateToprops)(Cards);
