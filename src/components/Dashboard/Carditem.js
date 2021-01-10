import React from "react";
import { ADD_USER, ADD_USER_FORM, REMOVE_USER, VIEW_USER } from "../../actions";
import avatar from "../../assets/logo512r.png";
import { FaEye, FaRegEye, FaTrash } from "react-icons/fa";
import { connect } from "react-redux";

function Carditem(item) {
  return (
    <div className="card-items" key={item.id} onClick={() => item.view()}>
      <div className="eye">
        <FaRegEye />
      </div>
      <div className="delete" onClick={() => item.remove()} key={item.id}>
        <FaTrash />
      </div>
      <div className="username">
        <h3 className="h3span">User Name:</h3>
        <h3>{item.fname + " " + item.lname}</h3>
      </div>
      <div className="status">
        <h3 className="h3span">Status:</h3> <h3>{item.status}</h3>
      </div>
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
    view: () => dispatch({ type: VIEW_USER, payload: { ...ownProps } }),
  };
};
export default connect(null, mapDispatchToprops)(Carditem);
