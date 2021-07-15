import React from "react";
import "./_buttons.scss";

function CircleButton(props) {
  return <div className="circle"> {props.children} </div>;
}

export default CircleButton;
