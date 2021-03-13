import React from "react";
import Container from "@material-ui/core/Container";
import { borders } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import BootstrapTable from "react-bootstrap-table-next";
import "./print.css";
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
    <Container
      style={{
        height: "100hv",
        width: "21.8cm",
      }}
    >
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
            PILOT NGV PROGRAMME - TANZANIA{" "}
          </h4>{" "}
          <h2 className="title" style={{ width: "fit-content" }}>
            NGV INSPECTION CERTIFICATE{" "}
          </h2>{" "}
          <h4
            className="title"
            style={{
              width: "fit-content",
              fontSize: "14px",
              padding: "20px 0px 0px 0px",
            }}
          >
            VALID FROM 6 FEB 2021 TO 6 AUG 2021{" "}
          </h4>{" "}
        </div>{" "}
        <div className="inspectionType">
          <Box border={1} {...defaultProps}>
            <h3
              style={{ padding: "0px 14px 0px 8px", fontSize: "14px" }}
              className="insp"
            >
              INSPECTION TYPE:{" "}
            </h3>{" "}
            <h5 style={{ padding: "0px 14px 0px 0px" }} className="insp">
              New Installation[...]{" "}
            </h5>{" "}
            <h5 style={{ padding: "0px 13px 0px 0px" }} className="insp">
              Periodic[...]{" "}
            </h5>{" "}
            <h5 style={{ padding: "0px 10px 0px 0px" }} className="insp">
              After Accident[...]{" "}
            </h5>{" "}
          </Box>{" "}
        </div>
        <table className="vehicleinfo">
          <thead>
            <tr>
              <th colspan="7" style={{ background: "#646060", color: "#fff" }}>
                VEHICLE INFORMATION{" "}
              </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            <tr className="trow" style={{ border: "1px solid black" }}>
              <td
                style={{
                  width: "145px",
                  borderRight: "solid 1px black",
                }}
              >
                Name of Owner{" "}
              </td>{" "}
              <td
                style={{
                  width: "80px",
                  borderRight: "solid 1px black",
                }}
              >
                {" "}
                Vehicle Reg.No{" "}
              </td>{" "}
              <td style={{ width: "80px", borderRight: "solid 1px black" }}>
                {" "}
                Year of man.{" "}
              </td>{" "}
              <td style={{ width: "80px", borderRight: "solid 1px black" }}>
                {" "}
                Make{" "}
              </td>{" "}
              <td style={{ width: "80px", borderRight: "solid 1px black" }}>
                {" "}
                Model{" "}
              </td>{" "}
              <td style={{ width: "auto", borderRight: "solid 1px black" }}>
                Chassis No.or VIN Engine No / Type{" "}
              </td>{" "}
              <td style={{ width: "80px", borderRight: "solid 1px black" }}>
                {" "}
                Mileage at Inspection(km){" "}
              </td>{" "}
            </tr>{" "}
            <tr className="trow">
              <td style={{ borderRight: "solid 1px black" }}> </td>{" "}
              <td style={{ borderRight: "solid 1px black" }}> </td>{" "}
              <td style={{ borderRight: "solid 1px black" }}> </td>{" "}
              <td style={{ borderRight: "solid 1px black" }}> </td>{" "}
              <td style={{ borderRight: "solid 1px black" }}> </td>{" "}
              <td style={{ border: "solid 1px black" }}>
                3{" "}
                <div>
                  <div id="span1" class="t">
                    1{" "}
                  </div>{" "}
                </div>{" "}
              </td>{" "}
              <td style={{ borderLeft: "solid 1px black" }}> egeg</td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
        <table className="vehicleinfo">
          <thead>
            <tr style={{ border: "solid 1px black" }}>
              <th colspan="7" style={{ background: "#646060", color: "#fff" }}>
                TYPE OF NGV{" "}
              </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            <tr className="trow" style={{ border: "solid 1px black" }}>
              <td style={{ width: "235px", borderRight: "solid 1px black" }}>
                {" "}
                Bi - fuel[....]{" "}
              </td>{" "}
              <td style={{ width: "235px", borderRight: "solid 1px black" }}>
                {" "}
                Dedicated[....]{" "}
              </td>{" "}
              <td style={{ width: "235px", borderRight: "solid 1px black" }}>
                {" "}
                Dual fuel[....]{" "}
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
        <table className="converkit">
          <thead>
            <tr style={{ border: "1px solid black" }}>
              <th
                colspan="2"
                style={{
                  background: "#646060",
                  color: "#fff",
                  border: "1px solid black",
                }}
              >
                CONVERSION KIT INFORMATION{" "}
              </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            <tr style={{ border: "1px solid black" }}>
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Type{" "}
              </td>{" "}
              <td
                style={{
                  border: "solid 1px black",
                }}
              >
                {" "}
              </td>{" "}
            </tr>{" "}
            <tr style={{ border: "solid 1px black" }}>
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Manufacturer{" "}
              </td>{" "}
              <td
                style={{
                  border: "solid 1px black",
                }}
              >
                {" "}
              </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Serial No{" "}
              </td>{" "}
              <td
                style={{
                  border: "solid 1px black",
                }}
              >
                {" "}
              </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Name of Installer{" "}
              </td>{" "}
              <td
                style={{
                  border: "solid 1px black",
                }}
              >
                {" "}
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
        <table className="cylinder">
          <thead>
            <tr style={{ border: "solid 1px black" }}>
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
                      borderRight: "solid 1px black",
                    }}
                  >
                    CNG CYLINDERS INFROMATION{" "}
                  </div>{" "}
                  <div style={{ margin: "auto" }}> Cylinder No. </div>{" "}
                </div>{" "}
              </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            <tr className="" style={{ height: "1px" }}>
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Cylinder No.{" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}> 1 </td>{" "}
              <td style={{ border: "solid 1px black" }}> 2 </td>{" "}
              <td style={{ border: "solid 1px black" }}> 3 </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Cylinder position in the Vehicle{" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
              <td style={{ border: "solid 1px black" }}></td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Cylinder Type{" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
              <td style={{ border: "solid 1px black" }}></td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Manufacture Name{" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
              <td style={{ border: "solid 1px black" }}></td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Manufacturer Address / Contact{" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
              <td style={{ border: "solid 1px black" }}></td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Service Pressure(MPa){" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
              <td style={{ border: "solid 1px black" }}></td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Manufactured Date{" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
              <td style={{ border: "solid 1px black" }}></td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Water Volume(litres){" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
              <td style={{ border: "solid 1px black" }}></td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                }}
              >
                Expiry Date{" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
              <td style={{ border: "solid 1px black" }}></td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
            </tr>{" "}
            <tr className="">
              <td
                style={{
                  width: "213px",
                  textAlign: "start",
                  paddingLeft: "5px",
                  border: "solid 1px black",
                }}
              >
                Certificate of Conformity to Tanzania Standards(TBS){" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
              <td style={{ border: "solid 1px black" }}></td>{" "}
              <td style={{ border: "solid 1px black" }}> </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
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
                INSPECTION STANDARD OR CODE OF PRACTICE USED{" "}
              </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            <tr className="" style={{ height: "1px" }}>
              <td style={{ border: "solid 1px black" }}>
                <table className="inspectionstandards">
                  <thead>
                    <tr>
                      <th colspan="2" style={{ border: "1px solid black" }}>
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
                            Item{" "}
                          </div>{" "}
                        </div>{" "}
                      </th>{" "}
                    </tr>{" "}
                  </thead>{" "}
                  <tbody>
                    <tr className="" style={{ height: "1px" }}>
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                          border: "1px solid black",
                        }}
                      >
                        CNG cylinder mounting on the brackets{" "}
                      </td>{" "}
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                          border: "1px solid black",
                        }}
                      >
                        CNG cylinder Condition{" "}
                      </td>{" "}
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                          border: "1px solid black",
                        }}
                      >
                        PRD condition and vent line{" "}
                      </td>{" "}
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                          border: "1px solid black",
                        }}
                      >
                        Fuel line from CNG cylinder to Pressure Regulator{" "}
                      </td>{" "}
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                          border: "1px solid black",
                        }}
                      >
                        Pressure Regulator{" "}
                      </td>{" "}
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                          border: "1px solid black",
                        }}
                      >
                        Refuelling connection and mounting{" "}
                      </td>{" "}
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                          border: "1px solid black",
                        }}
                      >
                        Piping and hoses condition and connections under the
                        bonnet{" "}
                      </td>{" "}
                    </tr>{" "}
                    <tr className="">
                      <td
                        style={{
                          width: "213px",
                          textAlign: "start",
                          paddingLeft: "5px",
                          border: "1px solid black",
                        }}
                      >
                        Dressing of wiring{" "}
                      </td>{" "}
                    </tr>{" "}
                  </tbody>{" "}
                </table>{" "}
              </td>{" "}
              <td style={{ border: "solid 1px black" }}>
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
                    Inspection Procedure{" "}
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
                        NFPA - 52: Vehicular Gaseous Fuel Systems Code.2010
                        Edition{" "}
                      </h5>{" "}
                    </p>{" "}
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
                        CGA C - 6.4: Compressed Gas Association - Standards for
                        Visual Inspection of Steel Compressed Gas Cylinders,
                        2001{" "}
                      </h5>{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
        <div
          style={{
            width: "705px",
            marginLeft: "45px",
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            gap: "70px",
          }}
        >
          <div style={{ width: "200px", height: "150px" }}>
            <img style={{ width: "200px", height: "150px" }} src={signature} />{" "}
          </div>{" "}
          <div style={{ width: "200px", height: "120px" }}>
            <img style={{ width: "200px", height: "150px" }} src={stamp} />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </Container>
  );
}

export default Printform;
