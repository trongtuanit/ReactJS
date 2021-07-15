import React, { useState, useEffect } from "react";
import { Button, Radio } from "antd";

export default function Footer({
  amount,
  showAll,
  showActive,
  showCompleted,
  deleteAllCompleted,
}) {
  const [value, setValue] = useState("All");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === "All") {
      showAll(true);
      showActive(false);
      showCompleted(false);
    } else if (value === "Active") {
      showAll(false);
      showActive(true);
      showCompleted(false);
    } else if (value === "Completed") {
      showAll(false);
      showActive(false);
      showCompleted(true);
    }
    // eslint-disable-next-line
  }, [value]);

  return (
    <div className="footer">
      {amount ? (
        <span>
          {amount} {amount > 1 ? "items" : "item"} left
        </span>
      ) : null}
      <div>
        <Radio.Group
          defaultValue="All"
          onChange={onChange}
          value={value}
          optionType="button"
          buttonStyle="solid"
        >
          <Radio.Button value="All">All</Radio.Button>
          <Radio.Button value="Active">Active</Radio.Button>
          <Radio.Button value="Completed">Completed</Radio.Button>
        </Radio.Group>
      </div>
      <Button
        className="dangerBtn"
        type="danger"
        onClick={() => deleteAllCompleted()}
      >
        Delete all completed
      </Button>
    </div>
  );
}
