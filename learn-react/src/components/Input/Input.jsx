import React from "react";

const Input = ({ handleFocus, type, focusout }) => {
  const Input = <input onFocus={handleFocus} type={type} onBlur={focusout} />;
  return Input;
};

export default Input;
