import React from "react";
import Square from "./Square";
import Image from "./Image";
import "./Body.css";


function Body() {
  return (
    <div className="body">
      <h1>Body</h1>
      <Image />
      <div className="sqDiv">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Body;
