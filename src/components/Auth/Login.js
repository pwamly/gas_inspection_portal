import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../client/index";

function Login() {
  const [isLoged, setIsLoged] = useState(false);
  const history = useHistory();
  const email = useRef("");
  const password = useRef("");
  const hundleSubmit = (e) => {
    e.preventDefault();
    login({
      username: email.current.value,
      password: password.current.value,
    });
  };

  return (
    <>
      {" "}
      {isLoged ? (
        <div className="form-wrapper-login"> Logged in </div>
      ) : (
        <div className="form-wrapper-login">
          <form className="form" action="">
            <input
              type="email"
              name="username"
              ref={email}
              placeholder="username/email"
            />
            <input
              type="password"
              name="password"
              ref={password}
              placeholder="password"
            />
            <button className="btn" type="submit" onClick={hundleSubmit}>
              Login{" "}
            </button>{" "}
            <h4>
              Not a member yet ? <Link to="/register"> Sign up now </Link>{" "}
            </h4>{" "}
            <h4>
              <Link to="/reset-password"> Forgot password ? </Link>{" "}
            </h4>{" "}
          </form>{" "}
        </div>
      )}{" "}
    </>
  );
}

export default Login;
