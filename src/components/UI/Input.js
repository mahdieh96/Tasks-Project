import React from "react";
import classes from "./Input.module.css";
export const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className={`${classes.input} ${props.className || ""}`}
      onChange={props.onChange}
      ref={ref}
    />
  );
});
