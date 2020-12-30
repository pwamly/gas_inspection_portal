import React from "react";

function Register() {
  return (
    <div className="form-wrapper-reg">
      <form className="form" action="">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <button className="btn">Register</button>
        <h4>
          Not a member yet?
          <a href=""> Login</a>
        </h4>
        <h4>
          <a href="">Forgot password?</a>
        </h4>
      </form>
    </div>
  );
}

export default Register;
