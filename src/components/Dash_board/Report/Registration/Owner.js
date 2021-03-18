import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link, useHistory } from "react-router-dom";
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

function Owner({ formData, setForm, navigation }) {
  const { name, email, phone, plateno, location } = formData;
  let history = useHistory();

  async function handle() {
    let responsecode = "1234";
    if (responsecode) {
      navigation.next();
    }
  }

  return (
    <Container maxWidth="xs">
      <Card variant="outlined" style={style}>
        <h3> OWNER INFORMATION </h3>{" "}
        <TextField
          label="Full Name"
          value={name}
          onChange={setForm}
          name="name"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Location"
          value={location}
          onChange={setForm}
          name="location"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Email"
          value={email}
          onChange={setForm}
          name="email"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={setForm}
          name="phone"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <div style={{ marginTop: "1rem" }}>
          {" "}
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "2px" }}
            onClick={() => history.push("/dashboard/reports")}
          >
            Back{" "}
          </Button>{" "}
          <Button
            variant="contained"
            width="sm"
            color="primary"
            style={{ marginTop: "1rem" }}
            onClick={handle}
          >
            Next{" "}
          </Button>{" "}
        </div>{" "}
      </Card>{" "}
    </Container>
  );
}

export default Owner;
