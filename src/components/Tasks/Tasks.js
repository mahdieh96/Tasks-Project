import React, { useCallback, useEffect, useState } from "react";
import classes from "./Tasks.module.css";
import { TaskItem } from "./TaskItem";
import { Card } from "../UI/Card";

export const Tasks = (props) => {
  console.log("Tasks rendering");
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const fetchTask = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://taskproject-aa787-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
      );
      if (!response.ok) throw new Error("sth is wrong!!");
      const data = await response.json();
      let task = [];
      for (let key in data) {
        task.push(data[key]);
      }
      props.setTasks(task);
    } catch (error) {
      setError(error.message || "sth went wrong");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);
  let content;
  if (props.tasks.length > 0) {
    content = (
      <ul className={classes.tasks}>
        {props.tasks.map((item) => (
          <TaskItem key={item.id}>{item.name}</TaskItem>
        ))}
      </ul>
    );
  } else {
    content = <p>There is no items.</p>;
  }
  return (
    <Card>
      {loading && <p>loading...</p>}
      {!loading && content}
      {error && <p>error happened</p>}
    </Card>
  );
};
