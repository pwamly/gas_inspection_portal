import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "react-bootstrap/Pagination";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { ADD_USER } from "../../../../actions";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { FaEye, FaRegEye, FaTrash, FaPrint } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import "./tablereport.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export function Actions() {
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        paddingRight: "40px",
      }}
    >
      <FaEye className="IconStyle" />
      <ImPencil className="IconStyle" />
      <FaTrash id="trash" className="IconStyle" />
    </div>
  );
}

const rows = [
  {
    name: "gwamako joel",
    email: "gwamako@gmail.com",
    phone: "255673000997",
    location: "Dar es salaam",
    newInstallation: "...v...",
    periodic: ".....",
    afterAccident: "....",
    ownername: "KAZAIKI HOSPITALL",
    vihecleRegno: "T361 ADU",
    manYear: "2004",
    make: "MISTUBISH",
    model: "ROSA",
    chasisno: "BE63EG301113",
    engineno: "4M51EAA907413",
    milliege: "130785",
    biFuel: "...",
    Dedicated: "...V...",
    DualFuel: "....",
    type: "SEQUENTIAL EFI",
    manufacturer: "JAPAN",
    serialno: "-",
    installername: "",
    cylinderno3: "3",
    cylinderposition3: "",
    cylinderSerialNo3: "12",
    cylindertype3: "",
    cmanufacturer3: "",
    cmanuContact3: "",
    servicepressure3: "",
    cmanufacturedDate3: "",
    waterVolume3: "",
    cexpiryDate3: "5-10-2019",
    tbscertificate3: "",
    cylinderno1: "1",
    cylinderposition1: "underneath",
    cylindertype1: "2",
    cylinderSerialNo1: "78",
    cmanufacturer1: "BQ",
    cmanuContact1: "china",
    servicepressure1: "20Mpa",
    cmanufacturedDate1: "10/2019",
    waterVolume1: "120L",
    cexpiryDate1: "10-2038",
    tbscertificate1: "YES",
    cylinderno2: "2",
    cylinderSerialNo2: "5",
    cylinderposition2: "underneath",
    cylindertype2: "2",
    cmanufacturer2: "BQ",
    cmanuContact2: "china",
    servicepressure2: "20Mpa",
    cmanufacturedDate2: "10-2019",
    waterVolume2: "120L",
    cexpiryDate2: "10-2038",
    tbscertificate2: "YES",
    inspectorID: "",
  },
];

const columns = [
  { name: "name", label: "Name", show: true },
  { name: "email", label: "Email", show: true },
  { name: "phone", label: "Phone", show: true },
  { name: "location", label: "Location", show: true },
  { name: "newInstallation", label: "New Installation", show: true },
  { name: "periodic", label: "Periodic", show: true },
  { name: "afterAccident", label: "After Accident", show: true },
  { name: "ownername", label: "Owner Name", show: true },
  { name: "vihecleRegno", label: "Vehicle Reg No", show: true },
  { name: "manYear", label: "Manu Year", show: true },
  { name: "make", label: "Make", show: true },
  { name: "model", label: "Model", show: true },
  { name: "chasisno", label: "Chasis No", show: true },
  { name: "engineno", label: "Engine No", show: true },
  { name: "milliege", label: "Milliege", show: true },
  { name: "biFuel", label: "Bi Fuel", show: true },
  { name: "Dedicated", label: "Dedicated", show: true },
  { name: "DualFuel", label: "Dual Fuel", show: true },
  { name: "type", label: "Type", show: true },
  { name: "manufacturer", label: "Manufacturer", show: true },
  { name: "serialno", label: "Serial No", show: true },
  { name: "installername", label: "Installer name", show: true },
  { name: "cylinderno3", label: "Cylinder No", show: true },
  { name: "cylinderposition3", label: "Cylinder position", show: true },
  { name: "cylinderSerialNo3", label: "Cylinder Serial No", show: true },
  { name: "cylindertype3", label: "Cylinder Type", show: true },
  { name: "cmanufacturer3", label: "Cylinder Manufacturer", show: true },
  { name: "cmanuContact3", label: "Cylinder Manu Contact", show: true },
  { name: "servicepressure3", label: "Service Pressure", show: true },
  { name: "cmanufacturedDate3", label: "Cylinder manu date", show: true },
  { name: "waterVolume3", label: "Water Vol", show: true },
  { name: "cexpiryDate3", label: "Expiry Date", show: true },
  { name: "tbscertificate3", label: "Tbs Certicicate", show: true },
  { name: "cylinderno1", label: "Cylinder No", show: true },
  { name: "cylinderposition1", label: "Cylinder Position", show: true },
  { name: "cylindertype1", label: "Cylinder Type", show: true },
  { name: "cylinderSerialNo1", label: "Cylinder Serial No", show: true },
  { name: "cmanufacturer1", label: "Cylinder manu", show: true },
  { name: "cmanuContact1", label: "Cylinder Contact", show: true },
  { name: "servicepressure1", label: "Service Pressure", show: true },
  { name: "cmanufacturedDate1", label: "Cylinder Manu date", show: true },
  { name: "waterVolume1", label: "Water Volume", show: true },
  { name: "cexpiryDate1", label: "Cylinder Expiry Date", show: true },
  { name: "tbscertificate1", label: "Tbs Certificate", show: true },
  { name: "cylinderno2", label: "Cylinder No", show: true },
  { name: "cylinderSerialNo2", label: "Cylinder Serial No", show: true },
  { name: "cylinderposition2", label: "Cylinder position", show: true },
  { name: "cylindertype2", label: "Cylinder type", show: true },
  { name: "cmanufacturer2", label: "cylinder manufacturer", show: true },
  { name: "cmanuContact2", label: "Cylinder Contact", show: true },
  { name: "servicepressure2", label: "Service Pressure", show: true },
  { name: "cmanufacturedDate2", label: "Cylinder Manufcturer", show: true },
  { name: "waterVolume2", label: "Water Volume", show: true },
  { name: "cexpiryDate2", label: "Cylinder Expiry Date", show: true },
  { name: "tbscertificate2", label: "Tbs Certificate", show: true },
  { name: "inspectorID", label: "Inspector ID", show: true },
  { name: "formatter", label: "Actions", show: true, formatter: Actions },
];

function BasicTable({ dispatch }) {
  const classes = useStyles();
  const formref = useRef();
  const fsname = useRef("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [opendate, setOpendate] = useState(false);
  const [openstatus, setOpenstatus] = useState(false);

  const handleChangedate = (event) => {
    setDate(event.target.value);
  };

  const handleClosedate = () => {
    setOpendate(false);
  };

  const handleOpendate = () => {
    setOpendate(true);
  };
  //..
  const handleChangestatus = (event) => {
    setStatus(event.target.value);
  };

  const handleClosestatus = () => {
    setOpenstatus(false);
  };

  const handleOpenstatus = () => {
    setOpenstatus(true);
  };

  return (
    <div className="table-wrapper">
      <div style={{ textAlign: "center" }}>REPORTS</div>
      <div
        style={{
          height: "50px",
          width: "100%",
          marginBottom: "30px",
          display: "flex",
          flexDirection: "row",
          gap: "30px",
        }}
      >
        <TextField
          style={{ height: "10px !important", marginLeft: "20px" }}
          label="Search"
          margin="normal"
          inputRef={fsname}
          variant="outlined"
          autoComplete="off"
          width="sm"
          ref={formref}
        />{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "35px",
            gap: "20px",
          }}
        >
          {" "}
          <InputLabel style={{ paddingTop: "3px" }} id="label">
            Filter By Date
          </InputLabel>
          <Select
            labelId="label"
            id="selectdate"
            open={opendate}
            onClose={handleClosedate}
            onOpen={handleOpendate}
            value={date}
            onChange={handleChangedate}
            ref={formref}
          >
            <MenuItem value="day">Today</MenuItem>
            <MenuItem value="week">This week</MenuItem>
            <MenuItem value="month">This month</MenuItem>
          </Select>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "35px",
            gap: "20px",
          }}
        >
          {" "}
          <InputLabel style={{ paddingTop: "3px" }} id="label">
            Filter By Cylinder Status
          </InputLabel>
          <Select
            labelId="label"
            id="selectstatus"
            open={openstatus}
            onClose={handleClosestatus}
            onOpen={handleOpenstatus}
            value={status}
            onChange={handleChangestatus}
            ref={formref}
          >
            <MenuItem value="day">Expired</MenuItem>
            <MenuItem value="week">Not expired</MenuItem>
          </Select>
        </div>
      </div>
      <TableContainer
        component={Paper}
        style={{
          border: "none !important",
        }}
      >
        <Table
          id="repotable"
          className={classes.table}
          aria-label="simple table"
          style={{
            border: "none !important",
            padding: "auto",
          }}
        >
          <TableHead
            style={{
              background: "rgb(241, 239, 239)",
              border: "none !important",
            }}
          >
            <TableRow style={{ border: "none !important" }}>
              <TableCell style={{ border: "none !important" }}></TableCell>
              {columns.map((th) => (
                <TableCell style={{ border: "none !important" }}>
                  {th.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={{ border: "none !important" }}>
            {rows.map((row, index) => (
              <TableRow key={row.name} style={{ border: "none !important" }}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ border: "none !important" }}
                >
                  {index + 1}
                </TableCell>
                {columns.map((column) => {
                  if (column.show == false) {
                    return null;
                  }
                  if (column.name == "formatter") {
                    return <Actions />;
                  }
                  return (
                    <TableCell style={{ border: "none !important" }}>
                      {row[column.name] || "N/A"}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
          <caption>
            <div style={{ float: "left", marginLeft: "50px" }}>
              <Pagination
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textDecoration: "none !important",
                }}
              >
                <AddIcon
                  className="plus"
                  onClick={() => dispatch({ type: ADD_USER })}
                />
                <FaEye className="plus" />
                <Pagination.First
                  onClick={() => "goToPage(1)"}
                  disabled={true}
                />
                <Pagination.Prev onClick={() => "goToPage(currentPage - 1)"} />
                <Pagination.Next onClick={() => " goToPage(currentPage + 1)"} />
                <Pagination.Last onClick={() => "goToPage(pages)"} />
              </Pagination>
            </div>
          </caption>
        </Table>
      </TableContainer>
    </div>
  );
}
const MapStateToprops = (store) => {
  return { ...store };
};
export default connect(MapStateToprops)(BasicTable);
