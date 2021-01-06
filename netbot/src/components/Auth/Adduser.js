import React from "react";
import { Link } from "react-router-dom";

function Adduser({ props }) {
  console.log("ttttttttttt", props);
  return (
    <div className="form-wrapper-reg">
      <h4 className="add-user-title">Add New User</h4>
      <form className="form" action="">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <button className="btn"> Save </button>
        <button className="btn"> Exit </button>
      </form>
    </div>
  );
}

export default Adduser;
