import React, { useReducer } from "react";
import ListInfo from "./ListInfo";
import { reducer } from "./reducer";

export default function Card({ data, getData }) {
  const defaultState = {
    title: `My name is`,
    value: `${data.name.first} ${data.name.last}`,
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  const getName = () => {
    const newState = {
      title: `My name is`,
      value: `${data.name.first} ${data.name.last}`,
    };
    dispatch({ type: "GET_NAME", payload: newState });
  };

  const getEmail = () => {
    const newState = {
      title: `My email is`,
      value: `${data.email}`,
    };
    dispatch({ type: "GET_EMAIL", payload: newState });
  };
  const getAge = () => {
    const newState = {
      title: `My age is`,
      value: `${data.dob.age}`,
    };
    dispatch({ type: "GET_AGE", payload: newState });
  };
  const getLocation = () => {
    const newState = {
      title: `My street is`,
      value: `${data.location.street.name}`,
    };
    dispatch({ type: "GET_LOCATION", payload: newState });
  };
  const getPhone = () => {
    const newState = {
      title: `My phone is`,
      value: `${data.phone}`,
    };
    dispatch({ type: "GET_PHONE", payload: newState });
  };
  const getPassword = () => {
    const newState = {
      title: `My password is`,
      value: `${data.login.password}`,
    };
    dispatch({ type: "GET_PASSWORD", payload: newState });
  };

  return (
    <div className="modal">
      <div className="img">
        <img src={data.picture.large} alt="avatar" />
      </div>
      <div className="user-data">
        <p className="user-title">{state.title}</p>
        <h1 className="user-value">{state.value}</h1>
      </div>
      <ListInfo
        getName={getName}
        getEmail={getEmail}
        getAge={getAge}
        getLocation={getLocation}
        getPhone={getPhone}
        getPassword={getPassword}
      />
      <button className="random" onClick={getData}>
        Random person
      </button>
    </div>
  );
}
