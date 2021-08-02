import React, { useReducer } from "react";
import { reducer } from "../reducer";

const defaultState = {
  isAnswerOpen: false,
};

export default function Item({ question, answer }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const toggleAnswer = () => {
    dispatch({ type: "TOGGLE_ANSWER" });
  };

  return (
    <div className="item">
      <div className="question">
        <h4>{question}</h4>
        <button onClick={toggleAnswer}>{state.isAnswerOpen ? "-" : "+"}</button>
      </div>
      {state.isAnswerOpen && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
