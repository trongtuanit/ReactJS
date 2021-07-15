import React, { useState } from "react";
import { Input } from "antd";

export default function InputTodo({ addTodo }) {
  const [text, setText] = useState("");

  const getText = (e) => {
    if (!e.target.value) {
      return;
    } else {
      setText(e.target.value);
    }
  };

  const resetText = (e) => {
    e.target.value = "";
  };

  const handleEnterPress = (e) => {
    addTodo(text);
    e.target.value = "";
    setText("");
  };

  return (
    <React.Fragment>
      <Input
        className="input"
        onChange={getText}
        size="large"
        placeholder="What needs to be done ?"
        onPressEnter={handleEnterPress}
        defaultValue={""}
        onBlur={resetText}
      />
    </React.Fragment>
  );
}
