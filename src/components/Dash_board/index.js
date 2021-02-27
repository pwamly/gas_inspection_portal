import React from "react";
import Navbar from "./Navibar/index";
import { IconContext } from "react-icons";
function Index() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Navbar />
      </IconContext.Provider>
    </>
  );
}

export default Index;
