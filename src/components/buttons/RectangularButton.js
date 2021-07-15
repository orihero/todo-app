import React from "react";
import "./_buttons.scss";

let RectangularButton = ({ children, hasShadow = false }) => {
  return <div className={!hasShadow ? "no-shadow" : "rect"}> {children} </div>;
};

export default RectangularButton;
