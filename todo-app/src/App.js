import React, { useState } from "react";
import TableTodo from "./components/TableTodo";
import { Switch } from "antd";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [isInDarkMode, setisInDarkMode] = useState(false);

  const setDarkMode = () => {
    setisInDarkMode(!isInDarkMode);
  };

  return (
    <div className={isInDarkMode ? "dark-mode content" : "content"}>
      <Switch defaultChecked={isInDarkMode} onChange={setDarkMode} />
      <div className="container">
        <h1 className="title">Todo List</h1>
        <TableTodo />
      </div>
    </div>
  );
}

export default App;
