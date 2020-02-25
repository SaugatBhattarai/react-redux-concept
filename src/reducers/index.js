/**
 * REDUCERS
 * ============
 * Specify how the app's state changes in response to actions send to the store.
 * Function that accepts state and action as arguments, and returns the next
 * state of the application
 * (previousState,action) => newState
 *
 */

const initialState = {
  numOfCakes: 10
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};

export default reducer;
