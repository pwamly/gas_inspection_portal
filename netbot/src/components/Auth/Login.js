import React from "react";

function Login() {
  return (
    <div className="form-wrapper-login">
      <form className="form" action="">
        <input type="text" placeholder="username/email" />
        <input type="text" placeholder="password" />
        <button className="btn"> Login </button>
        <h4>
          Not a member yet ? <a href=""> Sign up now </a>
        </h4>
        <h4>
          <a href=""> Forgot password ? </a>
        </h4>
      </form>
    </div>
  );
}

export default Login;
