const initialState = {
  rotation: 'r-spin'
};

export default (state = initialState, event) => {
  switch (event.type) {
    case "addValue":
      return { ...state, rotation: "r-spin" };
    case "subValue":
      return { ...state, rotation: 'l-spin' };
    default:
      return state;
  }
};
