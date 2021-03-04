import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Grid from "@material-ui/core/Grid";
import InspectionForm from "./InspectionForm";
import VehicleInfo from "./VehicleInformatin";
import VehicleInfoCont from "./VehicleInfoCont";
import Box from "@material-ui/core/Box";
import EngineType from "./EngineType";
import ConversionKitInfo from "./ConversionKitInfo";
import CgnCylinderInfo from "./CgnCylinderInfo";
import CgnCylinderInfoCont from "./CgnCylinderInfoCont";
import Preview from "./Preview";
import "./reg.css";

function Index() {
  const Default = {
    newInstallation: "",
    periodic: "",
    afterAccident: "",
    ownername: "",
    vihecleRegno: "",
    manYear: "",
    make: "",
    model: "",
    chasisno: "",
    engineno: "",
    milliege: "",
    biFuel: "",
    Dedicated: "",
    DualFuel: "",
    type: "",
    manufacturer: "",
    serialno: "",
    installername: "",
    cylinderno3: "3",
    cylinderposition3: "",
    cylindertype3: "",
    cmanufacturer3: "",
    cmanuContact3: "",
    servicepressure3: "",
    cmanufacturedDate3: "",
    waterVolume3: "",
    expiryDate3: "",
    tbscertificate3: "",
    cylinderno1: "1",
    cylinderposition1: "",
    cylindertype1: "",
    cmanufacturer1: "",
    cmanuContact1: "",
    servicepressure1: "",
    cmanufacturedDate1: "",
    waterVolume1: "",
    expiryDate1: "",
    tbscertificate1: "",
    cylinderno2: "2",
    cylinderposition2: "",
    cylindertype2: "",
    cmanufacturer2: "",
    cmanuContact2: "",
    servicepressure2: "",
    cmanufacturedDate2: "",
    waterVolume2: "",
    expiryDate2: "",
    tbscertificate2: "",
  };
  const nameid = { stepid: "Inspection-type" };
  const steps = [
    { id: "Inspection-type" },
    { id: "Vehicle-information" },
    { id: "Vehicle-informationCont" },
    { id: "Type-of-ngv" },
    { id: "Conversion-kit-information" },
    { id: "Cng-cylinders-information" },
    { id: "Cng-cylinders-informationCont" },
    { id: "preview" },
  ];
  const [formData, setForm] = useForm(Default);
  const { step, navigation } = useStep({ steps, initialStep: 7 });
  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "Inspection-type":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{ height: "100vh", border: "3px", boxSizing: "border-box" }}
        >
          <InspectionForm {...props} {...nameid} />{" "}
        </Grid>
      );
    case "Vehicle-information":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{ height: "100vh", border: "9px", boxSizing: "border-box" }}
        >
          <VehicleInfo {...props} />{" "}
        </Grid>
      );
    case "Vehicle-informationCont":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{ height: "100vh", border: "3px", boxSizing: "border-box" }}
        >
          <VehicleInfoCont {...props} />{" "}
        </Grid>
      );
    case "Type-of-ngv":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{ height: "100vh", border: "3px", boxSizing: "border-box" }}
        >
          <EngineType {...props} />{" "}
        </Grid>
      );
    case "Conversion-kit-information":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{ height: "100vh", border: "3px", boxSizing: "border-box" }}
        >
          <ConversionKitInfo {...props} />
        </Grid>
      );
    case "Cng-cylinders-information":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{ height: "100vh", border: "3px", boxSizing: "border-box" }}
        >
          <CgnCylinderInfo {...props} />{" "}
        </Grid>
      );
    case "Cng-cylinders-informationCont":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{ height: "100vh", border: "3px", boxSizing: "border-box" }}
        >
          <CgnCylinderInfoCont {...props} />{" "}
        </Grid>
      );
    case "preview":
      return (
        <Box p={5}>
          <Preview {...props} />
        </Box>
      );
  }

  return <div> </div>;
}

export default Index;
