export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        todoList: action.payload,
        isModalOpen: true,
        modalContent: "Item added!",
      };
    case "NO_CONTENT":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Please enter value!",
      };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };
    case "REMOVE_ITEM":
      return {
        ...state,
        todoList: action.payload,
        isModalOpen: true,
        modalContent: "Remove item successfully!",
      };
    case "COMPLETE_ITEM":
      return {
        ...state,
        todoList: action.payload,
        isModalOpen: true,
        modalContent: "Item completed!",
      };
    case "UNCOMPLETE_ITEM":
      return {
        ...state,
        todoList: action.payload,
        isModalOpen: true,
        modalContent: "Item uncompleted!",
      };
    case "COMPLETE_ALL":
      return {
        ...state,
        todoList: action.payload,
        isModalOpen: true,
        modalContent: "All items completed!",
      };
    case "GET_ALL":
      return {
        ...state,
        isShowActive: false,
        isShowCompleted: false,
        isShowAll: true,
      };
    case "GET_COMPLETED":
      return {
        ...state,
        isShowActive: false,
        isShowCompleted: true,
        isShowAll: false,
      };
    case "GET_ACTIVE":
      return {
        ...state,
        isShowActive: true,
        isShowCompleted: false,
        isShowAll: false,
      };
    case "REMOVE_ALL_COMPLETED":
      return {
        ...state,
        todoList: action.payload,
        isModalOpen: true,
        modalContent: "Delete all items completed!",
      };
    case "EDIT_ITEM":
      return {
        ...state,
        todoList: action.payload,
        isModalOpen: true,
        modalContent: "Item edited!",
      };
    default:
      throw new Error("no matching action type");
  }
};
