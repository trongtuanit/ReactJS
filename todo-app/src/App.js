import React from "react";
import TableTodo from "./components/TableTodo";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="title">Todo List</h1>
        <TableTodo />
      </div>
    </React.Fragment>
  );
}

export default App;
