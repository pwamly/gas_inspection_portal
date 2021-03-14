import React from "react";
import Pdf from "../Printform/Printform";
import Button from "@material-ui/core/Button";

const viewpdf = {};
const actions = {};

function View() {
  const handlePrint = () => {
    return;
  };
  const handleBack = () => {
    return;
  };

  return (
    <div style={viewpdf}>
      <pdf />
      <div style={actions}>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={handlePrint}
        >
          Print
        </Button>{" "}
        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={handleBack}
        >
          Back
        </Button>{" "}
      </div>
    </div>
  );
}

export default View;
