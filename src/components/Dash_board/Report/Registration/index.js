import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Owner from "./Owner";
import { connect } from "react-redux";
import InspectionForm from "./InspectionForm";
import VehicleInfo from "./VehicleInformatin";
import VehicleInfoCont from "./VehicleInfoCont";
import EngineType from "./EngineType";
import ConversionKitInfo from "./ConversionKitInfo";
import CgnCylinderInfo from "./CgnCylinderInfo";
import CgnCylinderInfoCont from "./CgnCylinderInfoCont";
import Preview from "./Preview";
import "./reg.css";

function Index({ reportdata }) {
  const {
    id,
    createdAt = "",
    validto = "",
    name = "",
    email = "",
    phone = "",
    location = "",
    newInstallation = "...v...",
    periodic = ".....",
    afterAccident = "....",
    ownername = "",
    vihecleRegno = "",
    manYear = "",
    make = "",
    model = "",
    chasisno = "",
    engineno = "",
    milliege = "",
    biFuel = "...",
    Dedicated = "...V...",
    DualFuel = "....",
    type = "",
    manufacturer = "",
    serialno = "-",
    installername = "",
    cylinderno3 = "3",
    cylinderposition3 = "",
    cylinderSerialNo3 = "",
    cylindertype3 = "",
    cmanufacturer3 = "",
    cmanuContact3 = "",
    servicepressure3 = "",
    cmanufacturedDate3 = "",
    waterVolume3 = "",
    cexpiryDate3 = "",
    tbscertificate3 = "",
    cylinderno1 = "1",
    cylinderposition1 = "",
    cylindertype1 = "",
    cylinderSerialNo1 = "",
    cmanufacturer1 = "",
    cmanuContact1 = "",
    servicepressure1 = "",
    cmanufacturedDate1 = "",
    waterVolume1 = "",
    cexpiryDate1 = "",
    tbscertificate1 = "",
    cylinderno2 = "2",
    cylinderSerialNo2 = "",
    cylinderposition2 = "",
    cylindertype2 = "",
    cmanufacturer2 = "",
    cmanuContact2 = "",
    servicepressure2 = "",
    cmanufacturedDate2 = "",
    waterVolume2 = "",
    cexpiryDate2 = "",
    tbscertificate2 = "",
    inspectorID = "",
    validfrom = "",
  } = reportdata;

  const Default = {
    id,
    name,
    email,
    phone,
    location,
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
    biFuel,
    Dedicated,
    DualFuel,
    type,
    manufacturer,
    serialno,
    installername,
    cylinderno3,
    cylinderposition3,
    cylindertype3,
    cmanufacturer3,
    cmanuContact3,
    servicepressure3,
    cmanufacturedDate3,
    waterVolume3,
    cexpiryDate3,
    tbscertificate3,
    cylinderno1,
    cylinderposition1,
    cylindertype1,
    cmanufacturer1,
    cmanuContact1,
    servicepressure1,
    cmanufacturedDate1,
    waterVolume1,
    cexpiryDate1,
    tbscertificate1,
    cylinderno2,
    cylinderposition2,
    cylindertype2,
    cmanufacturer2,
    cmanuContact2,
    cylinderSerialNo1,
    cylinderSerialNo2,
    cylinderSerialNo3,
    servicepressure2,
    cmanufacturedDate2,
    waterVolume2,
    cexpiryDate2,
    tbscertificate2,
    validfrom,
  };

  const steps = [
    { id: "Owner" },
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
  const { step, navigation } = useStep({ steps, initialStep: 0 });
  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "Owner":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{ height: "100hv", border: "3px", boxSizing: "border-box" }}
        >
          <Owner {...props} />{" "}
        </Grid>
      );

    case "Inspection-type":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{
            height: "100hv",
            border: "3px",
            boxSizing: "border-box",
            paddingTop: "40px",
          }}
        >
          <InspectionForm {...props} />{" "}
        </Grid>
      );
    case "Vehicle-information":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{
            height: "100hv",
            border: "9px",
            boxSizing: "border-box",
            paddingTop: "40px",
          }}
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
          style={{
            height: "100hv",
            border: "3px",
            boxSizing: "border-box",
            paddingTop: "40px",
          }}
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
          style={{
            height: "100hv",
            border: "3px",
            boxSizing: "border-box",
            paddingTop: "40px",
          }}
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
          style={{
            height: "100hv",
            border: "3px",
            boxSizing: "border-box",
            paddingTop: "40px",
          }}
        >
          <ConversionKitInfo {...props} />{" "}
        </Grid>
      );
    case "Cng-cylinders-information":
      return (
        <Grid
          container
          justify="center"
          direction="column"
          alignContent="center"
          style={{
            height: "100hv",
            border: "3px",
            boxSizing: "border-box",
          }}
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
          style={{
            height: "100hv",
            border: "3px",
            boxSizing: "border-box",
          }}
        >
          <CgnCylinderInfoCont {...props} />{" "}
        </Grid>
      );
    case "preview":
      return (
        <Box
          p={5}
          style={{
            border: "3px",
            boxSizing: "border-box",
            maxHeight: "550px",
            overflowY: "auto",
          }}
        >
          <Preview {...props} />{" "}
        </Box>
      );
  }

  return <div> </div>;
}
const MapStateToprops = (store) => {
  return { ...store };
};
export default connect(MapStateToprops)(Index);
