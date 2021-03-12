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

function VehicleInfocont({ formData, setForm, navigation }) {
  const {
    newInstallation,
    periodic,
    afterAccident,
    ownername,
    vihecleRegno,
    manYear,
    make,
    model,
    chasisno,
    engineno,
    milliege,
  } = formData;

  async function handle() {
    let responsecode = "1234";
    if (responsecode) {
      navigation.next();
    }
  }
  const Default = {
    newInstallation: "",
    periodic: "",
    afterAccident: "",
    ownername: "",
    vihecleRegno,
    manYear: "",
    make: "",
    model: "",
    chasisno: "",
    engineno: "",
    milliege: "",
  };
  return (
    <Container maxWidth="xs">
      <Card variant="outlined" style={style}>
        <h3> Continuation... </h3>{" "}
        <TextField
          label="Model"
          value={model}
          onChange={setForm}
          name="model"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Chasis No or VIN"
          value={chasisno}
          onChange={setForm}
          name="chasisno"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Engine No / Type"
          value={engineno}
          onChange={setForm}
          name="engineno"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Milleage at Inspection (km)"
          value={milliege}
          onChange={setForm}
          name="milliege"
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
      </Card>{" "}
    </Container>
  );
}

export default VehicleInfocont;
