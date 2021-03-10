import React, { useRef, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useToasts } from "react-toast-notifications";
import Card from "@material-ui/core/Card";
import { postCode } from "../../../../client/client";

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

function ResetPass({ formData, setForm, navigation }) {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);

  const { email, code, newpass, confirmpass } = formData;

  async function handle() {
    if (confirmpass !== newpass) {
      addToast("passwords not match", { appearance: "error" });
      return;
    }
    setLoading(true);
    try {
      const response = await postCode({ email, usercode: code, newpass });
      const { isSuccessful } = response;

      if (isSuccessful) {
        setLoading(false);
        addToast("... your password is successfully updated", {
          appearance: "success",
          autoDismiss: true,
        });
      } else {
        setLoading(false);
        addToast("Account Not found!", { appearance: "error" });
      }
    } catch (error) {
      setLoading(false);
      addToast("Failed", { appearance: "error" });
    }
  }

  return (
    <Container maxWidth="xs" className="login-form">
      <Card style={style}>
        {" "}
        <h3> Reset Password </h3>{" "}
        <TextField
          label="code"
          value={code}
          onChange={setForm}
          name="code"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="New password"
          value={newpass}
          onChange={setForm}
          name="newpass"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Confirm password"
          value={confirmpass}
          onChange={setForm}
          name="confirmpass"
          margin="normal"
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
          Submit{" "}
        </Button>{" "}
      </Card>{" "}
    </Container>
  );
}

export default ResetPass;
