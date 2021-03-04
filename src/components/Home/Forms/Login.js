import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { login } from "../../../client/client";
import { useToasts } from "react-toast-notifications";
import Spinner from "../../Spinner/Spiner";

const style = {
  maxWidth: 300,
  padding: "20px",
  borderRadius: "16px",
  margin: "auto",
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.4)",
  "&:hover": {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.4)",
  },
};

const spinerStyle = {
  display: "flex",
  flexDirection: "rows",
  gap: "12px",
};

function Login() {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);

  //   const [formData, setForm] = useState({});
  const username = useRef("");
  const password = useRef("");
  const formref = useRef();

  async function handle() {
    try {
      setLoading(true);
      const response = await login({
        email: username.current.value,
        password: password.current.value,
      });
      formref.current.reset();
      if (response) {
        setLoading(false);
        addToast("... was created successfully", {
          appearance: "success",
          autoDismiss: true,
        });
      }
      setLoading(false);
      addToast("Wrong Credentials!", { appearance: "error" });
    } catch (error) {
      setLoading(false);
      addToast("Failed", { appearance: "error" });
    }
  }

  return (
    <Container maxWidth="xs" className="login-form">
      <Card variant="outlined" style={style}>
        <h3> Sign in </h3>
        <TextField
          label="Email "
          margin="normal"
          inputRef={username}
          variant="outlined"
          autoComplete="off"
          fullWidth
          ref={formref}
        />
        <TextField
          label="Password "
          margin="normal"
          inputRef={password}
          variant="outlined"
          autoComplete="off"
          fullWidth
          ref={formref}
        />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={handle}
        >
          {loading ? (
            <div style={spinerStyle}>
              <Spinner loading={loading} /> Loading...
            </div>
          ) : (
            "Login"
          )}
        </Button>

        <h4>
          <Link to="/reset-password" style={{ textDecoration: "none" }}>
            Forgot password ?
          </Link>
        </h4>
      </Card>
    </Container>
  );
}

export default Login;
