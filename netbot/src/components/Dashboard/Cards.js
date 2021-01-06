import React, { useState } from "react";
import avatar from "../../assets/logo512r.png";
import { connect } from "react-redux";
import { ADD_USER } from "../../actions";

function Cards({ user = [], dispatch, children }) {
  const [addform, setAddform] = useState(false);

  return (
    <div className="cards">
      {!user.length === 0 ? (
        <div className="card-items">
          <h3 className="username">Username:</h3>
          <h3 className="status">Status:</h3>
          <div className="cavatar">
            <img className="cardimg" src={avatar} alt="" />
          </div>
        </div>
      ) : (
        <div className="nouser">
          <h3>No user yet</h3>
        </div>
      )}
      {addform && children}
      <div className="cbtn">
        <button className="btn" onClick={() => setAddform(true)}>
          Add User
        </button>
      </div>
    </div>
  );
}
function mapStateToprops(store) {
  return { ...store };
}
export default connect(mapStateToprops)(Cards);
