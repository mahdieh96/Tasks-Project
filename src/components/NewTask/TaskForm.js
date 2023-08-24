import React, { useRef, useState } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import classes from "./TaskForm.module.css";
import { Card } from "../UI/Card";
export const TaskForm = () => {
  const inputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(null);
  const addTaskHandler = async (task) => {
    setError(null);
    try {
      const newTask = { name: task, id: Math.random() };
      const response = await fetch(
        "https://taskproject-aa787-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        {
          body: JSON.stringify(newTask),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Can not send data.");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //validation
    if (inputRef.current.value.trim().length === 0) {
      setIsValid(false);
      return;
    }
    //send data to server
    addTaskHandler(inputRef.current.value.trim());
  };

  const inputChangeHandler = () => {
    if (inputRef.current.value.trim().length > 0) {
      setIsValid(true);
      return;
    }
    setIsValid(false);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={inputRef} onChange={inputChangeHandler} />
        <Button type="submit">Add Task</Button>
      </form>
      {!isValid && <p className={classes.error}>input can not be empty</p>}

      {error && <p className={classes.error}>problem with server</p>}
    </Card>
  );
};
