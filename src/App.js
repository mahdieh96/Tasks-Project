import React from "react";
import { Button } from "./components/UI/Button";
import { Input } from "./components/UI/Input";
import { TaskForm } from "./components/NewTask/TaskForm";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  return (
    <div>
      <TaskForm />
      <Tasks />
    </div>
  );
}

export default App;
