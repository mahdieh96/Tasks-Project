import React from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import classes from "./TaskForm.module.css";
import { Card } from "../UI/Card";
export const TaskForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <Input />
        <Button type="submit">Add Task</Button>
      </form>
    </Card>
  );
};
