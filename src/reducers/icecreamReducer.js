const initialIcecreamState = {
  numOfIcecream: 20
};

const reducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1
      };
    default:
      return state;
  }
};

export default reducer;
