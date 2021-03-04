import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { SidebarData } from "./Menubar/sidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import "../Navibar/navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showsidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showsidebar} />
        </Link>
        <Container maxWidth="xs" className="navcontainer">
          <Link to="#" className="navlinks">
            Home
          </Link>
          <Link to="#" className="navlinks">
            Feeds
          </Link>
          <Link to="/dashboard" className="navlinks">
            Login
          </Link>
        </Container>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showsidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} className="menu-bar">
                  {item.icon} <span> {item.title} </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
