import React from "react";
import classes from "./Tasks.module.css";
import { TaskItem } from "./TaskItem";
import { Card } from "../UI/Card";

export const Tasks = () => {
  const items = ["lffff", "ffffff", "vfvbdjhcbs"];
  return (
    <Card>
      <ul className={classes.tasks}>
        {items.map((item) => (
          <TaskItem>{item}</TaskItem>
        ))}
      </ul>
    </Card>
  );
};
