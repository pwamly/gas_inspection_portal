import React from "react";
import Card from "@material-ui/core/Card";
import "./profile.css";

function Profile() {
  const style = { display: "flex", flexDirection: "row", fontWeight: "bold" };
  return (
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
        opacity: "1",
        borderRadius: "16px",
      }}
    >
      <div className="pavata">
        <div className="avata">
          <span className="initialzoomp"> LF</span>{" "}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "50px",
          gap: "16px",
        }}
      >
        <span style={style}>
          Name : <span style={{ fontWeight: "normal" }}>Stephano Peter</span>
        </span>
        <span style={style}>
          Email : <span style={{ fontWeight: "normal" }}>pwamly@gmail.com</span>
        </span>
        <span style={style}>
          Phone : <span style={{ fontWeight: "normal" }}>+255673089337</span>
        </span>
        <span style={style}>
          Role : <span style={{ fontWeight: "normal" }}>admin</span>
        </span>
      </div>
    </Card>
  );
}

export default Profile;
