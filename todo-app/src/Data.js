const setData = (arr) => {
  localStorage.setItem("todoList", JSON.stringify(arr));
};

const getData = () => {
  let data;
  if (!JSON.parse(localStorage.getItem("todoList"))) {
    data = [];
    localStorage.setItem("todoList", JSON.stringify(data));
  } else {
    data = JSON.parse(localStorage.getItem("todoList"));
  }
  return data;
};

export { setData, getData };
