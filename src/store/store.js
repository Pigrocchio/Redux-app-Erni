const initialState = {
    value: 15
}


export default (state = initialState, event) => {
    switch (event.type) {
      case "addValue":
        return { ...state, value: state.value + 1 };
      case "subValue":
        return { ...state, value: state.value - 1 };
      default:
        return state;
    }
}