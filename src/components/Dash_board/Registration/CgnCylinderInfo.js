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

function CgnCylinderInfo({ formData, setForm, navigation }) {
  const {
    cylinderno,
    cylinderposition,
    cylindertype,
    cmanufacturer,
    cmanuContact,
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
        <h3> CNG CYLINDERS INFORMATION </h3>{" "}
        <TextField
          label="Cylinder No."
          value={cylinderno}
          onChange={setForm}
          name="cylinderno"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Cylinder position on the vehicle"
          value={cylinderposition}
          onChange={setForm}
          name="cylinderposition"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Cylinder Type"
          value={cylindertype}
          onChange={setForm}
          name="cylindertype"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Manufacturer Name"
          value={cmanufacturer}
          onChange={setForm}
          name="cmanufacturer"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Manufacturer Contact"
          value={cmanuContact}
          onChange={setForm}
          name="cmanuContact"
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
            onClick={() => navigation.next()}
          >
            Next{" "}
          </Button>{" "}
        </div>{" "}
      </Card>{" "}
    </Container>
  );
}

export default CgnCylinderInfo;
