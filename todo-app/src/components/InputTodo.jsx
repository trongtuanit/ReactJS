import React, { useState } from "react";
import { Input } from "antd";

export default function InputTodo({ addTodo }) {
  const [text, setText] = useState("");

  const getText = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleEnterPress = (e) => {
    if (e.target.value === 0) return;
    addTodo(e.target.value);
    setText("");
  };

  // const resetText = (e) => {
  //   e.target.value = "";
  //   setText("");
  // };

  return (
    <React.Fragment>
      <Input
        // onPaste={(e) => {
        //   e.preventDefault();
        // }}
        // onCopy={(e) => {
        //   e.preventDefault();
        // }}
        value={text}
        className="input"
        onChange={getText}
        size="large"
        placeholder="What needs to be done ?"
        onPressEnter={handleEnterPress}
      />
    </React.Fragment>
  );
}
