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

function EngineType({ formData, setForm, navigation }) {
  const { biFuel, Dedicated, DualFuel } = formData;

  async function handle() {
    let responsecode = "1234";
    if (responsecode) {
      navigation.next();
    }
  }

  return (
    <Container maxWidth="xs">
      <Card variant="outlined" style={style}>
        <h3> TYPE OF ENGINE </h3>
        <TextField
          label="Bi-fuel"
          value={biFuel}
          onChange={setForm}
          name="biFuel"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Dedicated"
          value={Dedicated}
          onChange={setForm}
          name="Dedicated"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Dual Fuel"
          value={DualFuel}
          onChange={setForm}
          name="DualFuel"
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
            onClick={() => navigation.previous()}
          >
            Back{" "}
          </Button>{" "}
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "1rem" }}
            onClick={handle}
          >
            Next{" "}
          </Button>{" "}
        </div>{" "}
      </Card>
    </Container>
  );
}

export default EngineType;
