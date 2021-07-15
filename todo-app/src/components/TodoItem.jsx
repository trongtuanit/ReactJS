import React from "react";
import { Checkbox, Button } from "antd";

export default function TodoItem({
  id,
  content,
  isComplete,
  deleteItem,
  checkItem,
}) {
  return (
    <div className="item">
      <Checkbox
        className="checkbox"
        onChange={() => checkItem(id)}
        checked={isComplete}
      />

      <p className={isComplete && "completed"}>{content}</p>

      <Button
        className="dangerBtn"
        type="danger"
        onClick={() => deleteItem(id)}
      >
        Delete
      </Button>
    </div>
  );
}
