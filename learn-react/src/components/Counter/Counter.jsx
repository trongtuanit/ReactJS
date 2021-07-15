import React, { useState } from "react";
import { Input, Button } from "antd";
export default function Counter({ value, callback }) {
  const [count, setCount] = useState(0);

  const handleCounter = (event) => {
    setCount(count + 1);
  };
  const handleReset = (event) => {
    setCount(0);
  };
  callback(count);
  return (
    <div>
      <Input disabled value={count} size="middle" /> <br /> <br />
      <Button type="primary" onClick={handleCounter} danger>
        Count
      </Button>
      <span> </span>
      <Button type="primary" onClick={handleReset} danger>
        Reset
      </Button>
    </div>
  );
}
