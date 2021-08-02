export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_NAME":
      return {
        ...state,
        title: action.payload.title,
        value: action.payload.value,
      };
    case "GET_EMAIL":
      return {
        ...state,
        title: action.payload.title,
        value: action.payload.value,
      };
    case "GET_AGE":
      return {
        ...state,
        title: action.payload.title,
        value: action.payload.value,
      };
    case "GET_LOCATION":
      return {
        ...state,
        title: action.payload.title,
        value: action.payload.value,
      };
    case "GET_PHONE":
      return {
        ...state,
        title: action.payload.title,
        value: action.payload.value,
      };
    case "GET_PASSWORD":
      return {
        ...state,
        title: action.payload.title,
        value: action.payload.value,
      };
    default:
      throw new Error("no matching action type");
  }
};
