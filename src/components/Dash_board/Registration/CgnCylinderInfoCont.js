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

function CgnCylinderInfoCont({ formData, setForm, navigation }) {
  const {
    servicepressure,
    cmanufacturedDate,
    waterVolume,
    expiryDate,
    tbscertificate,
  } = formData;

  async function handle() {
    let responsecode = "1234";
    if (responsecode) {
      navigation.next();
    }
  }

  return (
    <Container maxWidth="xs">
      <Card variant="outlined" style={style}>
        <h3> Continuation... </h3>{" "}
        <TextField
          label="Service Pressure(MPa)"
          value={servicepressure}
          onChange={setForm}
          name="  servicepressure,
    cmanufacturedDate,
    waterVolume,
    expiryDate,
    tbscertificate,"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Manufactured Date"
          value={cmanufacturedDate}
          onChange={setForm}
          name="cmanufacturedDate"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Water volume(litres)"
          value={waterVolume}
          onChange={setForm}
          name="waterVolume"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Expiry Date"
          value={expiryDate}
          onChange={setForm}
          name="expiryDate"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="TBS certificare"
          value={tbscertificate}
          onChange={setForm}
          name="tbscertificate"
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
            Preview{" "}
          </Button>{" "}
        </div>{" "}
      </Card>{" "}
    </Container>
  );
}

export default CgnCylinderInfoCont;
