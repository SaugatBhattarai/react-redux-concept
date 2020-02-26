import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import { buyCake, buyIcecream } from "./action";
import { createLogger } from "redux-logger";

const logger = createLogger({
  // ...options
});

/**
 * Redux store
 * one store for the entire application
 * Responsibilites:
 * 1- Holds application state
 * 2- Allows access to state via getState()
 * 3- Allows state to be updated via dispatch(action)
 * 4- Registers listens via subscribe(listener)
 * 5- Handles unregistering of listeners via the function returned by subscribe (listener)
 */

//1. Holds application state
const store = createStore(reducer, applyMiddleware(logger));

//2. Allows access to state via getState()
console.log("Initial State", store.getState());

//4. Registers listeners via subcribe(listener)
// const unsubscribe = store.subscribe(
//   () => console.log("State updated"),
//   store.getState()
// );

//USE THIS WITH REDUX LOGGER -- don't need to console log
const unsubscribe = store.subscribe(() => {});

//3. Allows state to be updated via dispatch(action)
//buyCake() function is action creaters
store.dispatch(buyCake()); //state updated
// console.log("First cake Dispatch", store.getState());

store.dispatch(buyCake()); //state updated
// console.log("Second cake Dispatch", store.getState());

store.dispatch(buyCake()); //state updated
// console.log("Third cake Dispatch", store.getState());

store.dispatch(buyIcecream()); //state updated
// console.log("First icecream Dispatch", store.getState());

store.dispatch(buyIcecream()); //state updated
// console.log("Second icecream Dispatch", store.getState());

// 5- Handles unregistering of listeners via the function returned
// by subscribe (listener)
unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
