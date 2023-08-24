import React from "react";
import classes from "./TaskItem.module.css";
export const TaskItem = (props) => {
  return <li className={classes["task-item"]}>{props.children}</li>;
};
