import React, { PureComponent } from "react";
import Pdf from "../Printform/Printform";
import Button from "@material-ui/core/Button";
import ReactToPrint from "react-to-print";
import { Link, useHistory, withRouter } from "react-router-dom";

const viewpdf = {};
const actions = {
  display: "flex",
  flexDirection: "row",
  gap: "30px",
  justifyContent: "center",
  marginBottom: "20px",
};

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal",
};

// export const Componet = withRouter(({ history, location }) => {});

class ComponentToPrint extends React.Component {
  render() {
    return <Pdf />;
  }
}

class Example extends PureComponent {
  render() {
    const { history, location } = this.props;
    return (
      <div>
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        <div style={actions}>
          <ReactToPrint
            trigger={() => (
              <Button
                variant="contained"
                width="sm"
                color="primary"
                style={{ marginTop: "1rem", paddingLeft: "0px" }}
              >
                Print
              </Button>
            )}
            content={() => this.componentRef}
          />
          <Button
            variant="contained"
            width="sm"
            color="primary"
            style={{ marginTop: "1rem", paddingLeft: "0px" }}
            onClick={() => history.push("/dashboard/reports")}
          >
            Back
          </Button>
        </div>
      </div>
    );
  }
}

export default Example;
