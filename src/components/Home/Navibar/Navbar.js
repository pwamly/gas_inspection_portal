import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { SidebarData } from "./Menubar/sidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import "../Navibar/navbar.css";
import "../home.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showsidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navba">
        <Container className="navcontaine">
          <Link to="#" className="navlinks1">
            Home{" "}
          </Link>{" "}
          <Link to="#" className="navlinks1">
            Feeds{" "}
          </Link>{" "}
          <Link to="/login" className="navlinks1">
            Login{" "}
          </Link>{" "}
        </Container>{" "}
      </div>{" "}
    </>
  );
}

export default Navbar;
