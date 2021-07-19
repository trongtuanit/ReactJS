import React, { useState } from "react";
import { Checkbox, Button } from "antd";

export default function TodoItem({
  id,
  content,
  isComplete,
  deleteItem,
  checkItem,
  editItem,
}) {
  const [text, setText] = useState(content);
  const [isContentEditale, setIsContentEditale] = useState(false);

  const handleEdit = () => {
    setIsContentEditale(true);
  };

  const completeEdit = (e) => {
    if (!e.target.value) {
      e.target.textContent = text;
      e.target.value = text;
      setIsContentEditale(false);
    } else {
      editItem(id, text);
      setIsContentEditale(false);
    }
  };

  const handleChangeValue = (e) => {
    if (!e.target.value) {
      e.target.value = text;
      return;
    } else {
      setText(e.target.value);
    }
  };

  return (
    <div className="item">
      <Checkbox
        className="checkbox"
        onChange={() => checkItem(id)}
        checked={isComplete}
      />

      <p
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            completeEdit();
          }
        }}
        onChange={handleChangeValue}
        contentEditable={isContentEditale}
        onDoubleClick={handleEdit}
        onBlur={completeEdit}
        className={isComplete && "completed"}
      >
        {text}
      </p>

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
