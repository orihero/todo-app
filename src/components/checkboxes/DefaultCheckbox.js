import React, { useState } from "react";
import "./_checkboxes.scss";

function DefaultCheckbox(props) {
  const [state, setState] = useState(false);
  let onValueChange = () => {
    setState(!state);
  };
  return (
    <div>
      <input
        onChange={onValueChange}
        checked={state}
        type="checkbox"
        id={`checkbox${props.children}`}
      ></input>
      <label
        className={state ? "checked" : ""}
        htmlFor={`checkbox${props.children}`}
      >
        {props.children}
      </label>
    </div>
  );
}

export default DefaultCheckbox;
