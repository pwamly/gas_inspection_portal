import React from "react";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div className="form-wrapper-forgot">
      <form className="form" action="">
        <input type="text" placeholder="username/email" />
        <button className="btn"> Reset </button>
        <h4>
          Not a member yet ?<Link to="/login">Login </Link>
        </h4>
      </form>
    </div>
  );
}

export default Forgot;
