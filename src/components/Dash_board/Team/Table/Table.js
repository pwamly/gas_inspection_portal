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
import { useToasts } from "react-toast-notifications";
import Paper from "@material-ui/core/Paper";
import Pagination from "react-bootstrap/Pagination";
import { useGet, useGetList } from "../../../../hooks/index";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { getUsers, deleteUser } from "../../../../client/client";
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

function BasicTable({ adduser, dispatch }) {
  const { results: rows, loading, refresh } = useGetList(getUsers);
  const { addToast } = useToasts();
  const [loadingdel, setLoadingdel] = useState(false);

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
            handledelete(row);
          }}
        />
      </div>
    ),
    []
  );
  let history = useHistory();
  const columns = [
    { label: "First name", show: true, name: "first_name" },
    { label: "Last name", show: true, name: "last_name" },
    { label: "Phone ", show: true, name: "phone" },
    { label: "Email", show: true, name: "email" },
    { label: "Role", show: true, name: "userRole" },
    { label: "Signature ", show: true, name: "signature" },
    { name: "formatter", label: "Actions", show: true, formatter: Actions },
  ];

  const classes = useStyles();
  const handleAdduser = () => {
    dispatch({ type: CLEAR_PROFILE_DATA });
    dispatch({ type: ADD_USER });
  };

  async function handledelete(row) {
    const { id } = row;
    try {
      setLoadingdel(true);
      let response = await deleteUser(id);

      if (response) {
        setLoadingdel(false);
        addToast("deleted successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        window.location.replace("/dashboard/team");
        return;
      }
      setLoadingdel(false);
      addToast("Wrong Credentials!", { appearance: "error" });
    } catch (error) {
      setLoadingdel(false);
      addToast("Failed", { appearance: "error" });
    }
  }

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
              <TableRow key={row.id}>
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
                <Button
                  variant="text"
                  style={{ marginRight: "10px", fontSize: "12px" }}
                  onClick={() => history.push("/dashboard/")}
                >
                  Close{" "}
                </Button>{" "}
                <AddIcon className="plus" onClick={handleAdduser} />
                <Pagination.First onClick={() => ""} disabled={true} />
                <Pagination.Prev
                  onClick={() => "goToPage(currentPage - 1)"}
                  disabled={true}
                />
                <Pagination.Next
                  onClick={() => " goToPage(currentPage + 1)"}
                  disabled={true}
                />
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
