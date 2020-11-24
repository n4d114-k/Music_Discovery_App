import React from "react";
import Artist from "./Artist";
import Nav from "./Nav";

const Main = (props) => (
  <div className="app-container">
    <Nav {...props} />
    <Artist {...props} />
  </div>
);

export default Main;
