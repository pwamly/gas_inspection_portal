import React, { useRef, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { getUserId, httpActions } from "../../../client/index";
import "./profile.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { useGet } from "../../../hooks";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Spinner from "../../Spinner/Spiner";
import { EDIT_USER, EXIT_EDIT_USER, EXIT_VEW_USER } from "../../../actions";
import { editProfile } from "../../../client";

const spinerStyle = {
  display: "flex",
  flexDirection: "rows",
  gap: "12px",
};

const Editstyle = {
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

const { putProfile } = httpActions;

function Profile({ profile, edituser, dispatch }) {
  const style = { display: "flex", flexDirection: "row", fontWeight: "bold" };
  const { fname, initial, lname, email, username, phone, userRole } =
    profile || {};
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const formref = useRef();
  const fsname = useRef(fname);
  const lsname = useRef(lname);
  const usrphone = useRef(phone);

  async function handlesave() {
    try {
      setLoading(true);
      // formref.current.reset();
      const response = await editProfile({
        firstname: fsname.current.value,
        lastname: lsname.current.value,
        phone: usrphone.current.value,
      });

      if (response) {
        setLoading(false);
        addToast("... was Updated successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        window.location.replace(`/dashboard`);
        return;
      }
      setLoading(false);
      addToast("Updates saved!", { appearance: "warning" });
    } catch (error) {
      setLoading(false);
      addToast("Failed", { appearance: "error" });
    }
  }

  const edit = false;

  return (
    <>
      {!edituser ? (
        <Card
          variant="outlined "
          style={{
            marginTop: "10px",
            position: "absolute",
            left: "50%",
            top: "50%",
            fontFamily: "sans-serif",
            transform: "translate(-50%, -50%)",
            width: "35%",
            minWidth: "300px",
            zIndex: "1",
            height: "500px",
            borderRadius: "16px",
          }}
        >
          <div className="pavata">
            <div className="avata">
              <span className="initialzoomp"> {initial} </span>{" "}
            </div>{" "}
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                margin: "50px",
                gap: "16px",
              }}
            >
              <span style={style}>
                Name:{" "}
                <span style={{ fontWeight: "normal" }}>
                  {" "}
                  {fname + "   " + lname}{" "}
                </span>{" "}
              </span>{" "}
              <span style={style}>
                Email: <span style={{ fontWeight: "normal" }}> {email} </span>{" "}
              </span>{" "}
              <span style={style}>
                Phone: <span style={{ fontWeight: "normal" }}> {phone} </span>{" "}
              </span>{" "}
              <span style={style}>
                Role: <span style={{ fontWeight: "normal" }}> {userRole} </span>{" "}
              </span>{" "}
            </div>{" "}
            <IconButton
              style={{
                width: "10%",
                height: "50px",
                marginTop: "78px",
                marginRight: "30px",
              }}
              color="primary"
              component="span"
              onClick={() => {
                dispatch({ type: EDIT_USER });
              }}
            >
              <Edit />
            </IconButton>
          </div>
          <div style={{ display: "flex ", justifyContent: "center" }}>
            {" "}
            <Button
              variant="contained"
              width="sm"
              style={{ marginTop: "1rem", paddingLeft: "0px" }}
              onClick={() => dispatch({ type: EXIT_VEW_USER })}
            >
              Close{" "}
            </Button>{" "}
          </div>
        </Card>
      ) : (
        <Card
          variant="outlined "
          style={{
            marginTop: "10px",
            position: "absolute",
            left: "50%",
            top: "50%",
            fontFamily: "sans-serif",
            transform: "translate(-50%, -50%)",
            width: "35%",
            minWidth: "300px",
            zIndex: "1",
            height: "400px",
            borderRadius: "16px",
            maxWidth: 300,
            padding: "20px",
            borderRadius: "16px",
            transition: "0.3s",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.4)",
            "&:hover": {
              boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.4)",
            },
          }}
        >
          {" "}
          <TextField
            label="First Name "
            defaultValue={fname}
            margin="normal"
            inputRef={fsname}
            variant="outlined"
            autoComplete="off"
            fullWidth
            ref={formref}
          />{" "}
          <TextField
            label="Last Name "
            margin="normal"
            inputRef={lsname}
            variant="outlined"
            autoComplete="off"
            defaultValue={lname}
            fullWidth
            ref={formref}
          />{" "}
          <TextField
            label="Phone"
            margin="normal"
            defaultValue={phone}
            inputRef={usrphone}
            variant="outlined"
            autoComplete="off"
            fullWidth
            ref={formref}
          />{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {" "}
            <Button
              variant="contained"
              widht="sm"
              color="primary"
              style={{ marginTop: "1rem", paddingLeft: "0px" }}
              onClick={handlesave}
            >
              {loading ? (
                <div style={spinerStyle}>
                  <Spinner loading={loading} /> Loading...{" "}
                </div>
              ) : (
                "Save"
              )}{" "}
            </Button>{" "}
            <Button
              variant="contained"
              width="sm"
              style={{ marginTop: "1rem", paddingLeft: "0px" }}
              onClick={() => dispatch({ type: EXIT_EDIT_USER })}
            >
              Close{" "}
            </Button>{" "}
          </div>
          <h4> </h4>{" "}
        </Card>
      )}{" "}
    </>
  );
}
const MapStateToprops = (store) => {
  return { ...store };
};
export default connect(MapStateToprops)(Profile);
