import React, {
  useCallback,
  useMemo,
  useEffect,
  useState,
  useRef,
} from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { FaEye, FaRegEye, FaTrash, FaPrint } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
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
import {
  ADD_USER,
  SAVE_PROFILE_DATA,
  CLEAR_PROFILE_DATA,
} from "../../../../actions";
import "./tableteam.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function BasicTable({ adduser, dispatch }) {
  const Actions = useCallback(
    (row) => (
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          paddingRight: "40px",
        }}
      >
        <Link>
          {" "}
          <ImPencil
            className="IconStyle"
            onClick={() => {
              dispatch({ type: SAVE_PROFILE_DATA, payload: row });
              dispatch({ type: ADD_USER });
            }}
          />
        </Link>

        <FaTrash
          id="trash"
          className="IconStyle"
          onClick={() => {
            window.location.replace("/dashboard/reports");
          }}
        />
      </div>
    ),
    []
  );
  let history = useHistory();
  const columns = [
    { label: "First name", show: true, name: "fname" },
    { label: "Last name", show: true, name: "lname" },
    { label: "Phone ", show: true, name: "name" },
    { label: "Email", show: true, name: "email" },
    { label: "Role", show: true, name: "role" },
    { label: "Signature ", show: true, name: "signature" },
    { name: "formatter", label: "Actions", show: true, formatter: Actions },
  ];

  const rows = [
    {
      fname: "stephan",
      lname: "pwamly",
      phone: "2556730893",
      role: "admin",
      signature: "pwamlysig",
    },
    {
      fname: "peter",
      lname: "gwajima",
      phone: "2556730800",
      role: "user",
      signature: "gwajisig",
    },
    {
      fname: "peter",
      lname: "gwajima",
      phone: "2556730800",
      role: "user",
      signature: "gwajisig",
    },
    {
      fname: "peter",
      lname: "gwajima",
      phone: "2556730800",
      role: "user",
      signature: "gwajisig",
    },
    {
      fname: "peter",
      lname: "gwajima",
      phone: "2556730800",
      role: "user",
      signature: "gwajisig",
    },
  ];

  const classes = useStyles();
  const handleAdduser = () => {
    dispatch({ type: CLEAR_PROFILE_DATA });
    dispatch({ type: ADD_USER });
  };

  return (
    <div className="table-wrapper">
      <div style={{ textAlign: "center" }}>TEAM</div>
      <TableContainer
        component={Paper}
        style={{
          border: "none",
        }}
      >
        <Table
          className={classes.table}
          aria-label="simple table"
          style={{
            border: "none",
            padding: "auto",
          }}
        >
          <TableHead style={{ background: "rgb(241, 239, 239)" }}>
            <TableRow>
              <TableCell></TableCell>
              {columns.map((th) => (
                <TableCell>{th.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                {columns.map((column) => {
                  if (column.show == false) {
                    return null;
                  }
                  if (column.name == "formatter") {
                    return <TableCell>{column.formatter(row)}</TableCell>;
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
            <div style={{ float: "right", marginRight: "50px" }}>
              <Pagination
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textDecoration: "none !important",
                }}
              >
                <AddIcon className="plus" onClick={handleAdduser} />
                <Pagination.First onClick={() => ""} disabled={true} />
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
