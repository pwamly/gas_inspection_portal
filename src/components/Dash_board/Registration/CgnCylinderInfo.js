import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const style = {
  display: "flex",
  flexDirection: "row",
};
const stylemain = {
  padding: "20px",
  borderRadius: "16px",
  margin: "auto",

  width: "800px",
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.4)",
  "&:hover": {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.4)",
  },
};

function CgnCylinderInfo({ formData, setForm, navigation }) {
  const {
    cylinderno1,
    cylinderposition1,
    cylindertype1,
    cmanufacturer1,
    cmanuContact1,
    cylinderno2,
    cylinderposition2,
    cylindertype2,
    cmanufacturer2,
    cmanuContact2,
    cylinderno3,
    cylinderposition3,
    cylindertype3,
    cmanufacturer3,
    cmanuContact3,
  } = formData;

  async function handle() {
    let responsecode = "1234";
    if (responsecode) {
      navigation.next();
    }
  }

  return (
    <Container>
      <Card style={stylemain}>
        <h3> CNG CYLINDERS INFORMATION </h3>{" "}
        <Card fullWidth style={style}>
          <Card>
            <TextField
              label="Cylinder No."
              value={cylinderno1}
              onChange={setForm}
              name="cylinderno1"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Cylinder position on vehicle"
              value={cylinderposition1}
              onChange={setForm}
              name="cylinderposition1"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Cylinder Type"
              value={cylindertype1}
              onChange={setForm}
              name="cylindertype1"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Manufacturer Name"
              value={cmanufacturer1}
              onChange={setForm}
              name="cmanufacturer1"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Manufacturer Contact"
              value={cmanuContact1}
              onChange={setForm}
              name="cmanuContact1"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
          </Card>{" "}
          <Card>
            <TextField
              label="Cylinder No."
              value={cylinderno2}
              onChange={setForm}
              name="cylinderno2"
              margin="normal"
              variant="outlined"
              autoComplete="off"
            />
            <TextField
              label="Cylinder position on vehicle"
              value={cylinderposition2}
              onChange={setForm}
              name="cylinderposition2"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Cylinder Type"
              value={cylindertype2}
              onChange={setForm}
              name="cylindertype2"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Manufacturer Name"
              value={cmanufacturer2}
              onChange={setForm}
              name="cmanufacturer2"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Manufacturer Contact"
              value={cmanuContact2}
              onChange={setForm}
              name="cmanuContact2"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
          </Card>{" "}
          <Card>
            <TextField
              label="Cylinder No."
              value={cylinderno3}
              onChange={setForm}
              name="cylinderno3"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Cylinder position on vehicle"
              value={cylinderposition3}
              onChange={setForm}
              name="cylinderposition3"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Cylinder Type"
              value={cylindertype3}
              onChange={setForm}
              name="cylindertype3"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Manufacturer Name"
              value={cmanufacturer3}
              onChange={setForm}
              name="cmanufacturer3"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
            <TextField
              label="Manufacturer Contact"
              value={cmanuContact3}
              onChange={setForm}
              name="cmanuContact3"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              maxWidth=""
            />
          </Card>{" "}
        </Card>
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
      </Card>
    </Container>
  );
}

export default CgnCylinderInfo;
