import React, { useReducer, useEffect } from "react";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import { Button, notification } from "antd";
import { getData, setData } from "../Data.js";
import { v1 as uuidv1 } from "uuid";
import { reducer } from "../reducer.js";
import Modal from "./Modal";

const openNotificationWithIcon = (type) => {
  notification[type]({
    duration: 1.5,
    message: "Thành công",
    description: "Chúc mừng bạn đã hoàn thành tất cả công việc!",
  });
};

const defaultState = {
  todoList: getData(),
  isShowCompleted: false,
  isShowActive: false,
  isShowAll: true,
  isModalOpen: false,
  modalContent: "",
};

export default function TableTodo() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const addTodo = (value) => {
    if (!value) {
      dispatch({ type: "NO_CONTENT" });
    } else {
      const newTodo = {
        id: uuidv1(),
        content: value,
        isComplete: false,
      };
      const newTodoList = [...state.todoList, newTodo];
      dispatch({ type: "ADD_ITEM", payload: newTodoList });
    }
  };

  const checkItem = (id) => {
    let isUncomplete = false;
    let newTodoList = state.todoList.map((todo) => {
      if (todo.id === id) {
        const newTodo = { ...todo };
        if (newTodo.isComplete) {
          isUncomplete = true;
        }
        newTodo.isComplete = !newTodo.isComplete;
        return newTodo;
      }
      return todo;
    });
    if (isUncomplete) {
      dispatch({ type: "UNCOMPLETE_ITEM", payload: newTodoList });
    } else {
      dispatch({ type: "COMPLETE_ITEM", payload: newTodoList });
    }
  };

  const deleteItem = (id) => {
    const newTodoList = state.todoList.filter((item) => item.id !== id);
    dispatch({ type: "REMOVE_ITEM", payload: newTodoList });
  };

  const editItem = (id, value) => {
    if (!value) {
      return;
    }
    let newTodoList = state.todoList.map((todo) => {
      if (todo.id === id) {
        const newTodo = { ...todo };
        newTodo.content = value;
        return newTodo;
      }
      return todo;
    });
    dispatch({ type: "EDIT_ITEM", payload: newTodoList });
  };

  useEffect(() => {
    setData(state.todoList);
  }, [state.todoList]);

  const deleteAllCompleted = () => {
    const newTodoList = state.todoList.filter(
      (item) => item.isComplete !== true
    );
    dispatch({ type: "REMOVE_ALL_COMPLETED", payload: newTodoList });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const showCompleted = () => {
    dispatch({ type: "GET_COMPLETED" });
  };

  const showActive = () => {
    dispatch({ type: "GET_ACTIVE" });
  };
  const showAll = () => {
    dispatch({ type: "GET_ALL" });
  };

  const setAllCompleted = () => {
    let newTodoList = state.todoList.map((todo) => {
      const newTodo = { ...todo };
      newTodo.isComplete = true;
      return newTodo;
    });
    dispatch({ type: "COMPLETE_ALL", payload: newTodoList });
    openNotificationWithIcon("success");
  };

  return (
    <div className="container">
      <div className="notice">
        {state.isModalOpen && (
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        )}
      </div>
      <InputTodo addTodo={addTodo} />
      {state.todoList.length ? (
        <Button
          type="danger"
          className="dangerBtn center"
          onClick={setAllCompleted}
        >
          Complete all
        </Button>
      ) : null}

      {state.todoList.map((item) => {
        const { id, content, isComplete } = item;
        if (state.isShowAll) {
          return (
            <TodoItem
              key={id}
              id={id}
              content={content}
              isComplete={isComplete}
              deleteItem={deleteItem}
              checkItem={checkItem}
              editItem={editItem}
            />
          );
        } else if (state.isShowCompleted) {
          if (item.isComplete === true) {
            return (
              <TodoItem
                key={id}
                id={id}
                content={content}
                isComplete={isComplete}
                deleteItem={deleteItem}
                checkItem={checkItem}
                editItem={editItem}
              />
            );
          }
        } else if (state.isShowActive) {
          if (item.isComplete === false) {
            return (
              <TodoItem
                key={id}
                id={id}
                content={content}
                isComplete={isComplete}
                deleteItem={deleteItem}
                checkItem={checkItem}
                editItem={editItem}
              />
            );
          }
        }
        return null;
      })}
      {state.todoList.length ? (
        <Footer
          amount={state.todoList.length}
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
          deleteAllCompleted={deleteAllCompleted}
        />
      ) : null}
    </div>
  );
}
