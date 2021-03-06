import React from "react";
import Container from "@material-ui/core/Container";
import { borders } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import BootstrapTable from "react-bootstrap-table-next";
import "./table.css";
// import url from "/home/pwamly/pwamly2020/Devhooks/portal/netbot/src/assets/signatures/1.jpg";
import stamp from "../../../assets/signatures/masaka.jpg";
import signature from "../../../assets/signatures/5.jpg";

const defaultProps = {
  display: "flex",
  flexDirection: "row",
  bgcolor: "background.paper",
  style: {
    width: "705px",
    height: "3rem",
    marginLeft: "45px",
    gap: "35px",
  },
  borderColor: "text.primary",
};

function Printform() {
  return (
    <Container style={{ minWidth: "100vh", width: "21.8cm" }}>
      <div className="pdfform">
        <div className="pdftitle">
          <h4
            className="title"
            style={{
              width: "fit-content",
              fontSize: "12px",
              padding: "30px 0px",
            }}
          >
            PILOT NGV PROGRAMME - TANZANIA
          </h4>
          <h2 className="title" style={{ width: "fit-content" }}>
            NGV INSPECTION CERTIFICATE
          </h2>
          <h4
            className="title"
            style={{
              width: "fit-content",
              fontSize: "14px",
              padding: "20px 0px 0px 0px",
            }}
          >
            VALID FROM 6 FEB 2021 TO 6 AUG 2021
          </h4>
        </div>
        <div className="inspectionType">
          <Box border={1} {...defaultProps}>
            <h3
              style={{ padding: "0px 14px 0px 8px", fontSize: "14px" }}
              className="insp"
            >
              INSPECTION TYPE:{" "}
            </h3>{" "}
            <h5 style={{ padding: "0px 14px 0px 0px" }} className="insp">
              New Installation [ ... ]
            </h5>
            <h5 style={{ padding: "0px 13px 0px 0px" }} className="insp">
              Periodic [ ... ]
            </h5>
            <h5 style={{ padding: "0px 10px 0px 0px" }} className="insp">
              After Accident [ ... ]
            </h5>
          </Box>
        </div>

        <table className="vehicleinfo">
          <thead>
            <tr>
              <th colspan="7" style={{ background: "#646060", color: "#fff" }}>
                VEHICLE INFORMATION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="trow">
              <td style={{ width: "145px" }}>Name of Owner</td>
              <td style={{ width: "80px" }}>Vehicle Reg. No</td>
              <td style={{ width: "80px" }}>Year of man.</td>
              <td style={{ width: "80px" }}>Make</td>
              <td style={{ width: "80px" }}>Model </td>
              <td style={{ width: "auto" }}>
                Chassis No. or VIN Engine No/Type
              </td>
              <td style={{ width: "80px" }}>Mileage at Inspection (km)</td>
            </tr>
            <tr className="trow">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                3
                <div styl={{ background: "none" }}>
                  <div id="span1" class="t">
                    1
                  </div>
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table className="vehicleinfo">
          <thead>
            <tr>
              <th colspan="7" style={{ background: "#646060", color: "#fff" }}>
                TYPE OF NGV
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="trow">
              <td style={{ width: "235px" }}>Bi-fuel [....]</td>
              <td style={{ width: "235px" }}>Dedicated [....]</td>
              <td style={{ width: "235px" }}>Dual fuel [....]</td>
            </tr>
          </tbody>
        </table>
        <table className="converkit">
          <thead>
            <tr>
              <th colspan="2" style={{ background: "#646060", color: "#fff" }}>
                CONVERSION KIT INFORMATION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Type
              </td>
              <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Manufacturer
              </td>
              <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Serial No
              </td>
              <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Name of Installer
              </td>
              <td></td>
            </tr>{" "}
          </tbody>
        </table>
        <table className="cylinder">
          <thead>
            <tr>
              <th
                colspan="4"
                style={{
                  background: "#646060",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      width: "210px",
                      paddingLeft: "3px",
                      borderRight: "1px  solid black",
                      height: "100%",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                    }}
                  >
                    CNG CYLINDERS INFROMATION
                  </div>
                  <div style={{ margin: "auto" }}>Cylinder No.</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="" style={{ height: "1px" }}>
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Cylinder No.
              </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Cylinder position in the Vehicle
              </td>
              <td></td> <td></td> <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Cylinder Type
              </td>
              <td></td> <td></td> <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Manufacture Name
              </td>
              <td></td> <td></td> <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Manufacturer Address/Contact
              </td>
              <td></td> <td></td> <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Service Pressure (MPa)
              </td>
              <td></td> <td></td> <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Manufactured Date
              </td>
              <td></td> <td></td> <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Water Volume (litres)
              </td>
              <td></td> <td></td> <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Expiry Date
              </td>
              <td></td> <td></td> <td></td>
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Certificate of Conformity to Tanzania Standards (TBS)
              </td>
              <td></td> <td></td> <td></td>
            </tr>{" "}
          </tbody>
        </table>
        <table className="tbs">
          <thead>
            <tr>
              <th
                colspan="2"
                style={{
                  background: "#646060",
                  color: "#fff",

                  textAlign: "center !important",
                }}
              >
                INSPECTION STANDARD OR CODE OF PRACTICE USED
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="" style={{ height: "1px" }}>
              <td>
                <table className="inspectionstandards">
                  <thead>
                    <tr>
                      <th colspan="2" style={{}}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "3px",
                              height: "100%",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              fontStyle: "italic",
                              fontWeight: "bold",
                            }}
                          >
                            Item
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="" style={{ height: "1px" }}>
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                        }}
                      >
                        CNG cylinder mounting on the brackets
                      </td>
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                        }}
                      >
                        CNG cylinder Condition
                      </td>
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                        }}
                      >
                        PRD condition and vent line
                      </td>
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                        }}
                      >
                        Fuel line from CNG cylinder to Pressure Regulator
                      </td>
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                        }}
                      >
                        Pressure Regulator
                      </td>
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                        }}
                      >
                        Refuelling connection and mounting
                      </td>
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                        }}
                      >
                        Piping and hoses condition and connections under the
                        bonnet
                      </td>
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                        }}
                      >
                        Dressing of wiring
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </td>
              <td>
                <div
                  style={{
                    width: "377px",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "55px",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      height: "23px",
                      fontWeight: "bold",
                      textAlign: "start",
                      padding: "2px",
                      fontStyle: "italic",
                    }}
                  >
                    Inspection Procedure
                  </div>{" "}
                  <div style={{}}>
                    <p
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                        paddingLeft: "35px",
                        fontStyle: "italic",
                        fontWeight: "normal",
                      }}
                    >
                      <h5> &#8226;</h5>
                      <h5
                        style={{
                          fontSize: "12px",
                          width: "400px",
                          textAlign: "start",
                          fontWeight: "normal",
                        }}
                      >
                        NFPA-52: Vehicular Gaseous Fuel Systems Code. 2010
                        Edition
                      </h5>{" "}
                    </p>
                    <p
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                        paddingLeft: "35px",
                        fontStyle: "italic",
                        fontWeight: "normal",
                      }}
                    >
                      <h5> &#8226;</h5>
                      <h5
                        style={{
                          fontSize: "12px",
                          width: "400px",
                          textAlign: "start",
                          fontWeight: "normal",
                        }}
                      >
                        CGA C-6.4: Compressed Gas Association - Standards for
                        Visual Inspection of Steel Compressed Gas Cylinders,
                        2001
                      </h5>{" "}
                    </p>
                  </div>
                </div>
              </td>
            </tr>{" "}
          </tbody>
        </table>
        <div
          style={{
            width: "705px",
            marginLeft: "45px",
            display: "flex",
            flexDirection: "row",
            marginTop: "30px",
            gap: "70px",
          }}
        >
          <div style={{ width: "200px", height: "150px", background: "green" }}>
            <img style={{ width: "200px", height: "150px" }} src={signature} />
          </div>
          <div style={{ width: "200px", background: "red", height: "120px" }}>
            <img style={{ width: "200px", height: "150px" }} src={stamp} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Printform;
