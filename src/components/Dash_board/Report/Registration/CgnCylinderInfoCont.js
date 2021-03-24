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

function CgnCylinderInfoCont({ formData, setForm, navigation }) {
  const {
    servicepressure1,
    cmanufacturedDate1,
    waterVolume1,
    tbscertificate1,
    servicepressure2,
    cmanufacturedDate2,
    waterVolume2,
    cexpiryDate1,
    cexpiryDate2,
    cexpiryDate3,
    tbscertificate2,
    servicepressure3,
    cmanufacturedDate3,
    waterVolume3,
    tbscertificate3,
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
        <h3> CNG CYLINDERS INFORMATION Cont... </h3>{" "}
        <Card fullWidth style={style}>
          <Card>
            <TextField
              label="Service Pressure(MPa)"
              value={servicepressure1}
              onChange={setForm}
              name="servicepressure1"
              margin="normal"
              variant="outlined"
              autoComplete="off"
            />
            <TextField
              value={cmanufacturedDate1}
              id="date"
              onChange={setForm}
              name="cmanufacturedDate1"
              label="Manufactured Date"
              margin="normal"
              type="date"
              variant="outlined"
              autoComplete="off"
              defaultValue="0000-00-00"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
            <TextField
              label="Water volume(litres)"
              value={waterVolume1}
              onChange={setForm}
              name="waterVolume1"
              margin="normal"
              variant="outlined"
              autoComplete="off"
            />
            <TextField
              value={cexpiryDate1}
              id="date"
              onChange={setForm}
              type="date"
              name="cexpiryDate1"
              label="Expiry Date"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              defaultValue="0000-00-00"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="TBS certificare"
              value={tbscertificate1}
              onChange={setForm}
              name="tbscertificate1"
              margin="normal"
              variant="outlined"
              autoComplete="off"
            />
          </Card>{" "}
          <Card>
            <TextField
              label="Service Pressure(MPa)"
              value={servicepressure2}
              onChange={setForm}
              name="servicepressure2"
              margin="normal"
              variant="outlined"
              autoComplete="off"
            />
            <TextField
              value={cmanufacturedDate2}
              id="date"
              onChange={setForm}
              type="date"
              name="cmanufacturedDate2"
              label="Manufactured Date"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              defaultValue="0000-00-00"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
            <TextField
              label="Water volume(litres)"
              value={waterVolume2}
              onChange={setForm}
              name="waterVolume2"
              margin="normal"
              variant="outlined"
              autoComplete="off"
            />
            <TextField
              value={cexpiryDate2}
              id="date"
              onChange={setForm}
              type="date"
              name="cexpiryDate2"
              label="Expiry Date"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              defaultValue="0000-00-00"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="TBS certificare"
              value={tbscertificate2}
              onChange={setForm}
              name="tbscertificate2"
              margin="normal"
              variant="outlined"
              autoComplete="off"
            />
          </Card>{" "}
          <Card>
            <TextField
              label="Service Pressure(MPa)"
              value={servicepressure3}
              onChange={setForm}
              name="servicepressure3"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
            <TextField
              value={cmanufacturedDate3}
              id="date"
              onChange={setForm}
              name="cmanufacturedDate3"
              type="date"
              label="Manufactured Date"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              defaultValue="0000-00-00"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
            <TextField
              label="Water volume(litres)"
              value={waterVolume3}
              onChange={setForm}
              name="waterVolume3"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
            <TextField
              value={cexpiryDate3}
              id="date"
              onChange={setForm}
              name="cexpiryDate3"
              label="Expiry Date"
              type="date"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              defaultValue="0000-00-00"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="TBS certificare"
              value={tbscertificate3}
              onChange={setForm}
              name="tbscertificate3"
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
          </Card>{" "}
        </Card>{" "}
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

export default CgnCylinderInfoCont;
