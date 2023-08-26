import React, { useEffect } from "react";
import classes from "./Tasks.module.css";
import { TaskItem } from "./TaskItem";
import { Card } from "../UI/Card";
import { useHttp } from "../hooks/use-http";

export const Tasks = (props) => {
  const { error, isLoading, sendRequest } = useHttp();

  const { setTasks } = props;
  useEffect(() => {
    const applyData = (data) => {
      let task = [];
      for (let key in data) {
        task.push(data[key]);
      }
      setTasks(task);
    };
    sendRequest(
      {
        url: "https://taskproject-aa787-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        method: "GET",
      },
      applyData
    );
  }, [sendRequest, setTasks]);
  let content;
  if (props.tasks.length > 0) {
    content = (
      <ul className={classes.tasks}>
        {props.tasks.map((item) => (
          <TaskItem id={item.id} key={item.id}>
            {item.name}
          </TaskItem>
        ))}
      </ul>
    );
  } else {
    content = <p>There is no items.</p>;
  }
  return (
    <Card>
      {isLoading && <p>Loading...</p>}
      {!isLoading && content}
      {error && <p>error happened</p>}
    </Card>
  );
};
