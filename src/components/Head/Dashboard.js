import React from "react";
import { logout } from "../../client";

function Dashboard() {
  return (
    <div className="head-wrapper-dash">
      <div className="logo-wrapper">
        <div className="logo">
          <span> NetBot </span>
        </div>
      </div>
      <div className="brand"> NETBOT </div>
      <div className="auth">
        <button className="btn" onClick={() => logout()}>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
