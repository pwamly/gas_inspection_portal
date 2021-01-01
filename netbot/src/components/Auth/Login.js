import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [isLoged, setIsLoged] = useState(false);

  const username = useRef("");
  const password = useRef("");
  const hundleSubmit = (e) => {
    e.preventDefault();

    console.log(username.current.value, password.current.value);
  };

  return (
    <>
      {isLoged ? (
        <div className="form-wrapper-login">Logged in</div>
      ) : (
        <div className="form-wrapper-login">
          <form className="form" action="">
            <input
              type="text"
              name="username"
              ref={username}
              placeholder="username/email"
            />
            <input
              type="text"
              name="password"
              ref={password}
              placeholder="password"
            />
            <button className="btn" type="submit" onClick={hundleSubmit}>
              Login
            </button>
            <h4>
              Not a member yet ? <Link to="/register">Sign up now</Link>
            </h4>
            <h4>
              <Link to="/reset-password">Forgot password ?</Link>
            </h4>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
