const loggedreducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        username: action.payload.username,
       };
    default:
      return state;
  }
};

export default loggedreducer;
