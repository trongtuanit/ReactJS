import React, { useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div>
      <h5>This is {date.toLocaleString()}</h5>
    </div>
  );
}
