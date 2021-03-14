import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { SidebarData } from "../Menubar/sidebarData";
import { connect } from "react-redux";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import "../Navibar/navbar.css";
import { logout as signout } from "../../../client";
import { VIEW_USER, CLEAR_REPORT_DATA } from "../../../actions";

function Index({ dispatch, props }) {
  const [sidebar, setSidebar] = useState(false);
  const showsidebar = () => setSidebar(!sidebar);
  const [modalShown, toggleModal] = useState(false);

  function handle(title) {
    if (title == "Registration") {
      dispatch({ type: CLEAR_REPORT_DATA });
    }
  }
  const logout = {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  };
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showsidebar} />{" "}
        </Link>{" "}
        <div className="pavatar">
          <div
            className="avatar"
            onClick={() => {
              toggleModal(!modalShown);
              dispatch({ type: VIEW_USER, payload: { modalShown } });
            }}
          >
            <span className="initial"> {props} </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showsidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>{" "}
          </li>{" "}
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink
                  className="menu-bar"
                  to={item.path}
                  activeClassName="active"
                  onClick={() => handle(item.title)}
                >
                  {item.icon} <span> {item.title} </span>{" "}
                </NavLink>{" "}
              </li>
            );
          })}{" "}
          <li key="123" className={logout.cName}>
            <Link onClick={() => signout()} className="menu-bar">
              {" "}
              {logout.icon} <span> Logout </span>{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </>
  );
}
const MapStateToprops = (store) => {
  return { ...store };
};
export default connect(MapStateToprops)(Index);
