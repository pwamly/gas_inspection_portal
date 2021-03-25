import React, {
  useCallback,
  useMemo,
  useEffect,
  useState,
  useRef,
} from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { useToasts } from "react-toast-notifications";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useGet, useGetList } from "../../../../hooks/index";
import Pagination from "react-bootstrap/Pagination";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { Breakpoint, BreakpointProvider } from "react-socks";
import {
  getAllReports,
  deleteReport,
  getAllhistory,
  deletehistory,
} from "../../../../client/client";
import {
  ADD_USER,
  SAVE_REPORT_DATA,
  CLEAR_PROFILE_DATA,
  SHOW_HISTORY_TABLE,
  SHOW_PDF,
} from "../../../../actions";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { FaEye, FaRegEye, FaTrash, FaPrint } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import Spin from "../../../Spinner/Loader";
import "./tablereport.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function BasicTable({ dispatch, reportdata, historytable }) {
  const classes = useStyles();
  const formref = useRef();
  const fsname = useRef("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [opendate, setOpendate] = useState(false);
  const [openstatus, setOpenstatus] = useState(false);
  const { addToast } = useToasts();
  const [loadingdel, setLoadingdel] = useState(false);
  const [paramsSearch, setSearch] = useState("");
  const [paramsStatus, setExpire] = useState("");
  const [paramsDate, setDateparam] = useState("");
  const [page, setPage] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const handleChangedate = (event) => {
    setDate(event.target.value);
  };

  let pgno, query;
  const params = { ...paramsDate, ...paramsSearch, ...paramsStatus, page };

  if (historytable) {
    query = getAllhistory;
  } else {
    query = getAllReports;
  }

  const {
    results: historydata,
    loading: historyloading,
    currentPage: historycurrentPage,
    pages: historypages,
    havePreviousPage: historyhavePreviousPage,
    haveNextPage: historyhaveNextPage,
    setCurrentPage: historysetCurrentPage,
    refresh: historyrefresh,
  } = useGetList(getAllhistory, params);

  const {
    results: data,
    loading,
    currentPage,
    pages,
    havePreviousPage,
    haveNextPage,
    setCurrentPage,
    total,
    refresh,
    setTotal,
  } = useGetList(getAllReports, params);

  let history = useHistory();
  let pgn = pageNo;
  const [rows, setRows] = useState(data);
  const [historyrows, setHistoryRows] = useState(historydata);
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
        <Link to="#">
          {" "}
          <FaEye
            className="IconStyle"
            onClick={() => {
              dispatch({ type: SAVE_REPORT_DATA, payload: row });
              dispatch({ type: SHOW_PDF });
              history.push("/dashboard/reports/view");
            }}
          />
        </Link>
        <Link>
          <ImPencil
            className="IconStyle"
            onClick={() => {
              dispatch({ type: SAVE_REPORT_DATA, payload: row });
              history.push("/dashboard/reports/edit");
            }}
          />
        </Link>

        <FaTrash
          id="trash"
          className="IconStyle"
          onClick={() => handledelete(row)}
        />
      </div>
    ),
    []
  );
  const Actionshistory = useCallback(
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
        <Link to="#">
          {" "}
          <FaEye
            className="IconStyle"
            onClick={() => {
              dispatch({ type: SAVE_REPORT_DATA, payload: row });
              dispatch({ type: SHOW_PDF });
              history.push("/dashboard/reports/view");
            }}
          />
        </Link>
        <FaTrash
          id="trash"
          className="IconStyle"
          onClick={() => handledeletehistory(row)}
        />
      </div>
    ),
    []
  );

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
    { name: "cylinderno1", label: "Cylinder No", show: true },
    { name: "cylinderSerialNo1", label: "Cylinder Serial No", show: true },
    { name: "cylinderposition1", label: "Cylinder Position", show: true },
    { name: "cylindertype1", label: "Cylinder Type", show: true },
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
    { name: "cylinderno3", label: "Cylinder No", show: true },
    { name: "cylinderSerialNo3", label: "Cylinder Serial No", show: true },
    { name: "cylinderposition3", label: "Cylinder position", show: true },
    { name: "cylindertype3", label: "Cylinder Type", show: true },
    { name: "cmanufacturer3", label: "Cylinder Manufacturer", show: true },
    { name: "cmanuContact3", label: "Cylinder Manu Contact", show: true },
    { name: "servicepressure3", label: "Service Pressure", show: true },
    { name: "cmanufacturedDate3", label: "Cylinder manu date", show: true },
    { name: "waterVolume3", label: "Water Vol", show: true },
    { name: "cexpiryDate3", label: "Expiry Date", show: true },
    { name: "tbscertificate3", label: "Tbs Certicicate", show: true },
    { name: "inspectorID", label: "Inspector Name", show: true },
    {
      name: "formatter",
      label: "Actions",
      show: true,
      formatter: !historytable ? Actions : Actionshistory,
    },
  ];

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

  useEffect(() => {
    const search = async () => {
      setLoadingdel(true);
      let res;
      if (historytable) {
        res = await getAllhistory(params);
      } else {
        res = await getAllReports(params);
      }

      setLoadingdel(false);
      if (historytable) {
        setHistoryRows(res.data);
      } else {
        setRows(res.data);
        setTotal(res.total);
      }
    };

    search();
  }, [paramsDate, paramsSearch, paramsStatus, page, historytable]);

  async function handledelete(row) {
    const { id } = row;
    try {
      setLoadingdel(true);
      let response;
      response = await deleteReport(id);
      if (response) {
        setLoadingdel(false);
        addToast("deleted successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        if (historytable && response) {
          return;
        }
        window.location.replace("/dashboard/reports");
        return;
      }
      setLoadingdel(false);
      addToast("Wrong Credentials!", { appearance: "error" });
    } catch (error) {
      setLoadingdel(false);
      addToast("Failed", { appearance: "error" });
    }
  }
  async function handledeletehistory(row) {
    const { id } = row;
    try {
      setLoadingdel(true);
      let response;
      response = await deletehistory(id);
      if (response) {
        setLoadingdel(false);
        addToast("deleted successfully", {
          appearance: "success",
          autoDismiss: true,
        });

        dispatch({ type: SHOW_HISTORY_TABLE, payload: false });
        dispatch({ type: SHOW_HISTORY_TABLE, payload: true });

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
      <div style={{ textAlign: "center" }}>
        {historytable ? "HISTORY " : "REPORTS"}
      </div>

      <Breakpoint small down>
        <div
          style={{
            height: "fit-content",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <TextField
            id="search"
            style={{
              height: "10px !important",
              width: "fit-content",
              margin: "auto",
            }}
            label="Search Cylinder Serial No "
            margin="normal"
            onChange={(e) => {
              setLoadingdel(true);
              setSearch({ q: e.target.value });
            }}
            variant="outlined"
            autoComplete="off"
            width="sm"
          />{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "fit-content",
              margin: "auto",
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
              onChange={(e) => setDateparam({ day: e.target.value })}
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
              width: "fit-content",
              margin: "auto",
              gap: "30px",
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
              onChange={(e) => setExpire({ status: e.target.value })}
            >
              <MenuItem value="expired">Expired</MenuItem>
              <MenuItem value="notexpired">Not expired</MenuItem>
            </Select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "fit-content",
              margin: "auto",
              gap: "20px",
            }}
          >
            {!historytable ? (
              <InputLabel
                className="switchlabel"
                style={{ paddingTop: "3px" }}
                id="switchlabel"
                onClick={() => dispatch({ type: SHOW_HISTORY_TABLE })}
              >
                Switch to History
              </InputLabel>
            ) : (
              <InputLabel
                className="switchlabel"
                style={{ paddingTop: "3px" }}
                id="switchlabel"
                onClick={() => dispatch({ type: SHOW_HISTORY_TABLE })}
              >
                Switch to Reports
              </InputLabel>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "auto",
              width: "fit-content",
              gap: "20px",
            }}
          >
            {!historytable && (
              <InputLabel style={{ paddingTop: "3px" }} id="label">
                Total number : <span style={{ color: "black" }}>{total}</span>
              </InputLabel>
            )}
          </div>
        </div>
      </Breakpoint>
      <Breakpoint medium up>
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
            id="search"
            style={{ height: "10px !important", marginLeft: "20px" }}
            label="Search Cylinder Serial No "
            margin="normal"
            onChange={(e) => {
              setLoadingdel(true);
              setSearch({ q: e.target.value });
            }}
            variant="outlined"
            autoComplete="off"
            width="sm"
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
              onChange={(e) => setDateparam({ day: e.target.value })}
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
              onChange={(e) => setExpire({ status: e.target.value })}
            >
              <MenuItem value="expired">Expired</MenuItem>
              <MenuItem value="notexpired">Not expired</MenuItem>
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
            {!historytable ? (
              <InputLabel
                className="switchlabel"
                style={{ paddingTop: "3px" }}
                id="switchlabel"
                onClick={() => dispatch({ type: SHOW_HISTORY_TABLE })}
              >
                Switch to History
              </InputLabel>
            ) : (
              <InputLabel
                className="switchlabel"
                style={{ paddingTop: "3px" }}
                id="switchlabel"
                onClick={() => dispatch({ type: SHOW_HISTORY_TABLE })}
              >
                Switch to Reports
              </InputLabel>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "35px",
              gap: "20px",
            }}
          >
            {!historytable && (
              <InputLabel style={{ paddingTop: "3px" }} id="label">
                Total number : <span style={{ color: "black" }}>{total}</span>
              </InputLabel>
            )}
          </div>
        </div>
      </Breakpoint>
      <TableContainer
        component={Paper}
        style={{
          border: "none !important",
        }}
      >
        {historytable ? (
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
              <TableRow
                style={{
                  border: "none !important",
                  height: "10px !important",
                  fontSize: "8px !important",
                }}
              >
                <TableCell
                  style={{
                    border: "none !important",
                    height: "10px !important",
                    fontSize: "8px !important",
                  }}
                ></TableCell>
                {columns.map((th) => (
                  <TableCell style={{ border: "none !important" }}>
                    {th.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody style={{ border: "none !important" }}>
              {!loading ? (
                historyrows.map((row, index) => {
                  return (
                    <TableRow
                      key={row.id}
                      style={{ border: "none !important" }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ border: "none !important" }}
                      >
                        <span> {pgn++}</span>
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
                  );
                })
              ) : (
                <div
                  style={{
                    position: "fixed",
                    top: "50%",
                    zIndex: "4",
                    left: "50%",
                  }}
                >
                  <Spin />
                </div>
              )}
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
                  <Button
                    variant="text"
                    style={{ marginRight: "2px", fontSize: "12px" }}
                    onClick={() => window.location.replace("/dashboard")}
                  >
                    Close{" "}
                  </Button>{" "}
                  <Pagination.First
                    onClick={() => setPage(1)}
                    disabled={true}
                  />
                  <Pagination.Prev
                    onClick={() => {
                      setPage(page - 1);
                      setPageNo(pageNo - 10);
                    }}
                    disabled={page > 1 ? false : true}
                  />
                  <Pagination.Next
                    onClick={() => {
                      setPage(page + 1);
                      setPageNo(pageNo + 10);
                    }}
                    disabled={historypages > page ? false : true}
                  />
                  <Pagination.Last
                    onClick={() => setPage(pages)}
                    disabled={historypages > page ? false : true}
                  />
                </Pagination>
              </div>
            </caption>
          </Table>
        ) : (
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
              <TableRow
                style={{
                  border: "none !important",
                  height: "10px !important",
                  fontSize: "8px !important",
                }}
              >
                <TableCell
                  style={{
                    border: "none !important",
                    height: "10px !important",
                    fontSize: "8px !important",
                  }}
                ></TableCell>
                {columns.map((th) => (
                  <TableCell style={{ border: "none !important" }}>
                    {th.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody style={{ border: "none !important" }}>
              {!loading ? (
                rows.map((row, index) => {
                  return (
                    <TableRow
                      key={row.id}
                      style={{ border: "none !important" }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ border: "none !important" }}
                      >
                        <span> {pgn++}</span>
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
                  );
                })
              ) : (
                <div
                  style={{
                    position: "fixed",
                    top: "50%",
                    zIndex: "4",
                    left: "50%",
                  }}
                >
                  <Spin />
                </div>
              )}
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
                  <Button
                    variant="text"
                    style={{ marginRight: "2px", fontSize: "12px" }}
                    onClick={() => window.location.replace("/dashboard")}
                  >
                    Close{" "}
                  </Button>{" "}
                  <Pagination.First
                    onClick={() => setPage(1)}
                    disabled={true}
                  />
                  <Pagination.Prev
                    onClick={() => {
                      setPage(page - 1);
                      setPageNo(pageNo - 10);
                    }}
                    disabled={page > 1 ? false : true}
                  />
                  <Pagination.Next
                    onClick={() => {
                      setPage(page + 1);
                      setPageNo(pageNo + 10);
                    }}
                    disabled={pages > page ? false : true}
                  />
                  <Pagination.Last
                    onClick={() => setPage(pages)}
                    disabled={pages > page ? false : true}
                  />
                </Pagination>
              </div>
            </caption>
          </Table>
        )}{" "}
      </TableContainer>
    </div>
  );
}
const MapStateToprops = (store) => {
  return { ...store };
};
export default connect(MapStateToprops)(BasicTable);
