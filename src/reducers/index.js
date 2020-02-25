/**
 * REDUCERS
 * ============
 * Specify how the app's state changes in response to actions send to the store.
 * Function that accepts state and action as arguments, and returns the next
 * state of the application
 * (previousState,action) => newState
 *
 */

//create store only takes one reducers so need to combine reducer

import cakeReducer from "./cakeReducer";
import icecreamReducer from "./icecreamReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer
});

export default allReducers;
