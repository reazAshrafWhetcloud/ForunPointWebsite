const INITIAL_STATE = {
  collapse: false,
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATEMENU":
      return {
        ...state,
        collapse: action.collapse,
      };
    default:
      return state;
  }
};

export default Reducer;
