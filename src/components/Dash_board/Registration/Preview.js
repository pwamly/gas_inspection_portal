import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import RenderAccordion from "./RenderAccordion";

function Preview(data) {
  const { formData, navigation, nameid } = data;
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
    biFuel,
    Dedicated,
    DualFuel,
    type,
    manufacturer,
    serialno,
    installername,
    cylinderno,
    cylinderposition,
    cylindertype,
    cmanufacturer,
    cmanuContact,
    servicepressure,
    cmanufacturedDate,
    waterVolume,
    expiryDate,
    tbscertificate,
  } = formData;

  const { go } = navigation;
  return (
    <Container maxWidth="sm" style={{ height: "100vh" }}>
      <h3>Review</h3>
      <RenderAccordion
        summary="INSPECTION TYPE"
        details={[
          { nameid: "Inspection-type" },
          { "New installation": newInstallation },
          { Periodic: periodic },
          { "After Accident": afterAccident },
        ]}
        go={go}
        nameid={nameid}
      />
      <RenderAccordion
        summary="VEHICLE INFORMATION"
        details={[
          { nameid: "Vehicle-information" },
          { "Name of Owner": ownername },
          { "Vehicle Reg No": vihecleRegno },
          { "Year of Man": manYear },
          { Make: make },
          { Model: model },
          { "Chasis No or VIN": chasisno },
          { "Engine No / Type": engineno },
          { "Milleage at Inspection(km)": milliege },
        ]}
        go={go}
      />{" "}
      <RenderAccordion
        summary="TYPE OF NGV"
        details={[
          { nameid: "Type-of-ngv" },
          { "Bi-Fuel": biFuel },
          { Dedicated: Dedicated },
          { "Dual Fuel": DualFuel },
        ]}
        go={go}
      />{" "}
      <RenderAccordion
        summary="CONVERSION KIT INFORMATION"
        details={[
          { nameid: "Conversion-kit-information" },
          { Type: type },
          { Manufacturer: manufacturer },
          { "Serial No": serialno },
          { "Name of Installer": installername },
        ]}
        go={go}
      />{" "}
      <RenderAccordion
        summary="CNG CYLINDER INFORMATION"
        details={[
          { nameid: "Cng-cylinders-information" },
          { "Cylinder No": cylinderno },
          { "Cylinder Position": cylinderposition },
          { "Cylinder Type": cylindertype },
          { "Manufacture Name": cmanufacturer },
          { "Manufacturer Address": cmanuContact },
          { "Service Presssure(MPa)": servicepressure },
          { "Manufactured Date": cmanufacturedDate },
          { "Water volume(Ltr)": waterVolume },
          { "Expiry Date": expiryDate },
          { "TBS Certificate": tbscertificate },
        ]}
        go={go}
      />{" "}
      <Button color="primary" variant="contained" style={{ marginTop: "1rem" }}>
        Submit
      </Button>
    </Container>
  );
}

export default Preview;
