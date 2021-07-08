import React from "react";
import "./_buttons.scss";

function RoundButton(props) {
  return <div className="round">{props.children}</div>;
}

export default RoundButton;
