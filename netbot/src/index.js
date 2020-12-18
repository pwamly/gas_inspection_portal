import React from "react";
import ReactDom from "react-dom";
import { Data } from "./values";
import Myprofile from "./Profile";
import "./index.css";

function Home() {
  return (
    <section className="profile">
      {Data.map((element) => {
        return <Myprofile key={element.id} {...element} />;
      })}
    </section>
  );
}

ReactDom.render(<Home />, document.getElementById("root"));
