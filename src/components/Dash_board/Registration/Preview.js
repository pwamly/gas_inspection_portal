import React, { useRef, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import RenderAccordion from "./RenderAccordion";
import { postVehicleInfo } from "../../../client/client";
import { useToasts } from "react-toast-notifications";
import Spinner from "../../Spinner/Spiner";

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

const spinerStyle = {
  display: "flex",
  flexDirection: "rows",
  gap: "12px",
};

function Preview(data) {
  const { formData, navigation, nameid } = data;
  const {
    name,
    email,
    phone,
    location,
    validfrom,
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
    cexpiryDate1,
    tbscertificate1,
    cylinderno2,
    cylinderposition2,
    cylindertype2,
    cmanufacturer2,
    cmanuContact2,
    servicepressure2,
    cmanufacturedDate2,
    cylinderSerialNo1,
    cylinderSerialNo2,
    cylinderSerialNo3,
    waterVolume2,
    cexpiryDate2,
    tbscertificate2,
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
  } = formData;

  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);

  async function handle() {
    try {
      setLoading(true);
      const response = await postVehicleInfo(formData);

      if (response) {
        setLoading(false);
        addToast("... was created successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        return;
      }
      setLoading(false);
      addToast("Wrong Credentials!", { appearance: "error" });
    } catch (error) {
      setLoading(false);
      addToast("Failed", { appearance: "error" });
    }
  }
  const { go } = navigation;
  return (
    <Container maxWidth="sm" style={{ height: "90%" }}>
      <h3> Review </h3>{" "}
      <RenderAccordion
        summary="OWNER DETAILS"
        details={[
          { nameid: "Owner" },
          { "Full Name": name },
          { Email: email },
          { Phone: phone },
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
          { "Valid From": validfrom },
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
          { "Cylinder Serial No": cylinderSerialNo1 },
          { "Manufacture Name": cmanufacturer1 },
          { "Manufacturer Address": cmanuContact1 },
          { "Service Presssure(MPa)": servicepressure1 },
          { "Manufactured Date": cmanufacturedDate1 },
          { "Water volume(Ltr)": waterVolume1 },
          { "Expiry Date": cexpiryDate1 },
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
          { "Cylinder Serial No": cylinderSerialNo2 },
          { "Manufacture Name": cmanufacturer2 },
          { "Manufacturer Address": cmanuContact2 },
          { "Service Presssure(MPa)": servicepressure2 },
          { "Manufactured Date": cmanufacturedDate2 },
          { "Water volume(Ltr)": waterVolume2 },
          { "Expiry Date": cexpiryDate2 },
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
          { "Cylinder Serial No": cylinderSerialNo3 },
          { "Manufacture Name": cmanufacturer3 },
          { "Manufacturer Address": cmanuContact3 },
          { "Service Presssure(MPa)": servicepressure3 },
          { "Manufactured Date": cmanufacturedDate3 },
          { "Water volume(Ltr)": waterVolume3 },
          { "Expiry Date": cexpiryDate3 },
          { "TBS Certificate": tbscertificate3 },
        ]}
        go={go}
      />{" "}
      <Button
        variant="contained"
        width="md"
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={handle}
      >
        {loading ? (
          <div style={spinerStyle}>
            <Spinner loading={loading} /> Loading...{" "}
          </div>
        ) : (
          "Save"
        )}{" "}
      </Button>{" "}
    </Container>
  );
}
export default Preview;
