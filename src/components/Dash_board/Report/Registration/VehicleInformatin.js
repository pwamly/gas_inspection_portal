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

function VehicleInfo({ formData, setForm, navigation }) {
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
        <h3> VEHICLE INFORMATION </h3>{" "}
        <TextField
          label="Name of Owner"
          value={ownername}
          onChange={setForm}
          name="ownername"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Vehicle Reg No"
          value={vihecleRegno}
          onChange={setForm}
          name="vihecleRegno"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Year of Man."
          value={manYear}
          onChange={setForm}
          name="manYear"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Make"
          value={make}
          onChange={setForm}
          name="make"
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

export default VehicleInfo;
