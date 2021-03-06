import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import RenderAccordion from "./RenderAccordion";

function Preview(data) {
  const { formData, navigation, nameid } = data;
  const {
    name,
    email,
    phone,
    plateno,
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
    cylinderno1,
    cylinderposition1,
    cylindertype1,
    cmanufacturer1,
    cmanuContact1,
    servicepressure1,
    cmanufacturedDate1,
    waterVolume1,
    expiryDate1,
    tbscertificate1,
    cylinderno2,
    cylinderposition2,
    cylindertype2,
    cmanufacturer2,
    cmanuContact2,
    servicepressure2,
    cmanufacturedDate2,
    waterVolume2,
    expiryDate2,
    tbscertificate2,
    cylinderno3,
    cylinderposition3,
    cylindertype3,
    cmanufacturer3,
    cmanuContact3,
    servicepressure3,
    cmanufacturedDate3,
    waterVolume3,
    expiryDate3,
    tbscertificate3,
  } = formData;

  const { go } = navigation;
  return (
    <Container maxWidth="sm" style={{ height: "100vh" }}>
      <h3> Review </h3>{" "}
      <RenderAccordion
        summary="OWNER DETAILS"
        details={[
          { nameid: "Owner" },
          { "Full Name": name },
          { Email: email },
          { Phone: phone },
          { "Plate No": plateno },
          { Location: location },
        ]}
        go={go}
        nameid={nameid}
      />{" "}
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
      />{" "}
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
        summary="CNG CYLINDER INFORMATION 1"
        details={[
          { nameid: "Cng-cylinders-information" },
          { "Cylinder No": cylinderno1 },
          { "Cylinder Position": cylinderposition1 },
          { "Cylinder Type": cylindertype1 },
          { "Manufacture Name": cmanufacturer1 },
          { "Manufacturer Address": cmanuContact1 },
          { "Service Presssure(MPa)": servicepressure1 },
          { "Manufactured Date": cmanufacturedDate1 },
          { "Water volume(Ltr)": waterVolume1 },
          { "Expiry Date": expiryDate1 },
          { "TBS Certificate": tbscertificate1 },
        ]}
        go={go}
      />{" "}
      <RenderAccordion
        summary="CNG CYLINDER INFORMATION 2"
        details={[
          { nameid: "Cng-cylinders-information" },
          { "Cylinder No": cylinderno2 },
          { "Cylinder Position": cylinderposition2 },
          { "Cylinder Type": cylindertype2 },
          { "Manufacture Name": cmanufacturer2 },
          { "Manufacturer Address": cmanuContact2 },
          { "Service Presssure(MPa)": servicepressure2 },
          { "Manufactured Date": cmanufacturedDate2 },
          { "Water volume(Ltr)": waterVolume2 },
          { "Expiry Date": expiryDate2 },
          { "TBS Certificate": tbscertificate2 },
        ]}
        go={go}
      />{" "}
      <RenderAccordion
        summary="CNG CYLINDER INFORMATION 3"
        details={[
          { nameid: "Cng-cylinders-information" },
          { "Cylinder No": cylinderno3 },
          { "Cylinder Position": cylinderposition3 },
          { "Cylinder Type": cylindertype3 },
          { "Manufacture Name": cmanufacturer3 },
          { "Manufacturer Address": cmanuContact3 },
          { "Service Presssure(MPa)": servicepressure3 },
          { "Manufactured Date": cmanufacturedDate3 },
          { "Water volume(Ltr)": waterVolume3 },
          { "Expiry Date": expiryDate3 },
          { "TBS Certificate": tbscertificate3 },
        ]}
        go={go}
      />{" "}
      <Button color="primary" variant="contained" style={{ marginTop: "1rem" }}>
        Submit{" "}
      </Button>{" "}
    </Container>
  );
}
export default Preview;
