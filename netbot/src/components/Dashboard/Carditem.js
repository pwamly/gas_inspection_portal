import React from "react";
import { ADD_USER, ADD_USER_FORM, REMOVE_USER } from "../../actions";
import avatar from "../../assets/logo512r.png";
import { FaEye, FaRegEye, FaTrash } from "react-icons/fa";
import { connect } from "react-redux";

function Carditem(item) {
  return (
    <div className="card-items" key={item.id}>
      <div className="eye">
        <FaRegEye />
      </div>
      <div className="delete" onClick={() => item.remove()}>
        <FaTrash />
      </div>
      <h3 className="username">Username: {item.fname + " " + item.lname}</h3>
      <h3 className="status">Status: {item.status}</h3>
      <div className="cavatar">
        <img className="cardimg" src={avatar} alt="" />
      </div>
    </div>
  );
}
const mapDispatchToprops = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    remove: () => dispatch({ type: REMOVE_USER, payload: { id } }),
  };
};
export default connect(null, mapDispatchToprops)(Carditem);
