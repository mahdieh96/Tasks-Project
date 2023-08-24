import React, { useRef, useState } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import classes from "./TaskForm.module.css";
import { Card } from "../UI/Card";
export const TaskForm = () => {
  const inputRef = useRef();
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputRef.current.value.trim().length === 0) {
      setError(true);
      return;
    }
  };
  const inputChangeHandler = () => {
    if (inputRef.current.value.trim().length > 0) {
      setError(false);
      return;
    }
    setError(true);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={inputRef} onChange={inputChangeHandler} />
        <Button type="submit">Add Task</Button>
      </form>
      {error && <p className={classes.error}>input can not be empty</p>}
    </Card>
  );
};
