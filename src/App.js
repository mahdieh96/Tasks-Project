import React, { useState } from "react";
import { Button } from "./components/UI/Button";
import { Input } from "./components/UI/Input";
import { TaskForm } from "./components/NewTask/TaskForm";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  console.log("app rendering");
  const [tasks, setTasks] = useState([]);
  const newTaskHandler = (task) => {
    setTasks((prev) => [...prev, task]);
  };
  return (
    <div>
      <TaskForm onAddNewTask={newTaskHandler} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
