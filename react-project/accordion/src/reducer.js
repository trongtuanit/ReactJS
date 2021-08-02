export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ANSWER":
      return {
        ...state,
        isAnswerOpen: !state.isAnswerOpen,
      };
    default:
      throw new Error("no matching action type");
  }
};
