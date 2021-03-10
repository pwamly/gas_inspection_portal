import React, { useRef, useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getCode } from "../../../../client";
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

function ForgotPass({ formData, setForm, navigation }) {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const { email, code, newpass } = formData;

  async function handle() {
    setLoading(true);
    try {
      const { code } = await getCode({ email });

      if (code) {
        setLoading(false);
        addToast("... your recovery code successfully sent to your phone", {
          appearance: "success",
          autoDismiss: true,
        });
        navigation.next();
        return;
      }
      setLoading(false);
      addToast("Account Not found!", { appearance: "error" });
    } catch (error) {
      setLoading(false);
      addToast("Failed", { appearance: "error" });
    }
  }

  return (
    <Container maxWidth="xs" className="login-form">
      <Card variant="outlined" style={style}>
        <h3> Forgot Password </h3>{" "}
        <TextField
          label="email / phone"
          value={email}
          onChange={setForm}
          name="email"
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

export default ForgotPass;
