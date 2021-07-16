import React, { useState, useEffect } from "react";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import { Button } from "antd";
import { getData, setData } from "../Data.js";
import { v1 as uuidv1 } from "uuid";

export default function TableTodo() {
  const [todoList, setTodoList] = useState(getData());
  const [isShowCompleted, setIsShowCompleted] = useState(false);
  const [isShowActive, setIsShowActive] = useState(false);
  const [isShowAll, setIsShowAll] = useState(true);

  const addTodo = (value) => {
    if (!value) {
      return;
    }
    const newData = [
      ...todoList,
      {
        id: uuidv1(),
        content: value,
        isComplete: false,
      },
    ];
    setTodoList(newData);
  };

  const checkItem = (id) => {
    let newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        const newTodo = { ...todo };
        newTodo.isComplete = !newTodo.isComplete;
        return newTodo;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const deleteItem = (id) => {
    const newData = todoList.filter((item) => item.id !== id);
    setTodoList(newData);
  };

  useEffect(() => {
    setData(todoList);
  }, [todoList]);

  const deleteAllCompleted = () => {
    const newData = todoList.filter((item) => item.isComplete !== true);
    setTodoList(newData);
  };

  const showCompleted = (isShow) => {
    setIsShowCompleted(isShow);
  };

  const showActive = (isShow) => {
    setIsShowActive(isShow);
  };
  const showAll = (isShow) => {
    setIsShowAll(isShow);
  };

  const setAllCompleted = () => {
    let newTodoList = todoList.map((todo) => {
      const newTodo = { ...todo };
      newTodo.isComplete = true;
      return newTodo;
    });
    setTodoList(newTodoList);
    alert("Congratulate, your works has been completed!");
  };

  return (
    <div className="container">
      <InputTodo addTodo={addTodo} />

      {todoList.length ? (
        <Button
          type="danger"
          className="dangerBtn center"
          onClick={setAllCompleted}
        >
          Complete all
        </Button>
      ) : null}

      {todoList.map((item) => {
        const { id, content, isComplete } = item;
        if (isShowAll) {
          return (
            <TodoItem
              key={id}
              id={id}
              content={content}
              isComplete={isComplete}
              deleteItem={deleteItem}
              checkItem={checkItem}
            />
          );
        } else if (isShowCompleted) {
          if (item.isComplete === true) {
            return (
              <TodoItem
                key={id}
                id={id}
                content={content}
                isComplete={isComplete}
                deleteItem={deleteItem}
                checkItem={checkItem}
              />
            );
          }
        } else if (isShowActive) {
          if (item.isComplete === false) {
            return (
              <TodoItem
                key={id}
                id={id}
                content={content}
                isComplete={isComplete}
                deleteItem={deleteItem}
                checkItem={checkItem}
              />
            );
          }
        }
        return null;
      })}
      {todoList.length ? (
        <Footer
          amount={todoList.length}
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
          deleteAllCompleted={deleteAllCompleted}
        />
      ) : null}
    </div>
  );
}
