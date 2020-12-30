import React from "react";

function Forgot() {
  return (
    <div className="form-wrapper-forgot">
      <form className="form" action="">
        <input type="text" placeholder="username/email" />
        <input type="text" placeholder="password" />
        <button className="btn"> Reset </button>
        <h4>
          Not a member yet ?<a href=""> Login </a>
        </h4>
      </form>
    </div>
  );
}

export default Forgot;
