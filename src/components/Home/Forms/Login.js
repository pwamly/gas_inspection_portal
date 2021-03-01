import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

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

function Login() {
  //   const [formData, setForm] = useState({});
  const username = useRef("");
  const password = useRef("");

  function handle() {
    return;
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
        />
        <TextField
          label="Password "
          margin="normal"
          inputRef={password}
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={handle}
        >
          Login
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
