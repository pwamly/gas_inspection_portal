import React from "react";
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

function ResetPass({ formData, setForm, navigation }) {
  const { email, code, newpass, confirmpass } = formData;

  async function handle() {
    console.log("ooooooooooo", email, code, newpass, confirmpass);
  }

  return (
    <Container maxWidth="xs">
      <Card style={style}>
        {" "}
        <h3>Reset Password</h3>
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
          Submit
        </Button>
      </Card>
    </Container>
  );
}

export default ResetPass;
