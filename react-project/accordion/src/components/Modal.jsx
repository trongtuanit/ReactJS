import React from "react";
import { data } from "../data";
import Item from "./Item";
// import { reducer } from "../reducer.js";

// const defaultState = {};

export default function Modal() {
  // const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className="modal">
      {data.map((item) => {
        const { question, answer } = item;
        return <Item question={question} answer={answer} />;
      })}
    </div>
  );
}
