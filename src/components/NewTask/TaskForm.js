import React, { useRef, useState } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import classes from "./TaskForm.module.css";
import { Card } from "../UI/Card";

import { useHttp } from "../hooks/use-http";
export const TaskForm = (props) => {
  const applyData = (dataName, data) => {
    props.onAddNewTask({ name: dataName, id: data.name });
  };
  const inputRef = useRef();

  const [isValid, setIsValid] = useState(true);
  const { error, isLoading, sendRequest } = useHttp();

  const submitHandler = (e) => {
    e.preventDefault();
    //validation
    if (inputRef.current.value.trim().length === 0) {
      setIsValid(false);
      return;
    }
    //send data to server
    sendRequest(
      {
        url: "https://taskproject-aa787-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        method: "POST",
        body: {
          name: inputRef.current?.value.trim(),
        },
        headers: { "Content-Type": "application/json" },
      },
      applyData.bind(null, inputRef.current.value.trim())
    );
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
        <Button type="submit">{isLoading ? "Loading" : "Add Task"}</Button>
      </form>
      {!isValid && <p className={classes.error}>input can not be empty</p>}

      {error && <p className={classes.error}>problem with server</p>}
    </Card>
  );
};
