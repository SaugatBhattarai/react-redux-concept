/**
 * OUR APPLICATION (USING REDUX THUNK)
 * Fetches as list of users from an API end point and stores it in the redux store.
 *
 *
 * STATE
 * ======
 * State = {
 * loading: true,
 * data:[],
 * error:''
 * }
 * loading - Display a loading spinner in your component
 * data - List of users
 * error - Display error to the user
 *
 *
 * ACTIONS
 * ========
 * 1. FETCH_USERS_REQUEST - Fetch list of users
 * 2. FETCH_USERS_SUCCESS - Fetched successfully
 * 3. FETCH_USERS_FAILURE - Error Fetching the data
 *
 *
 * REDUCERS
 * =========
 * case: FETCH_USERS_REQUEST
 *      loading:true
 *
 * case: FETCH_USERS_SUCCESS
 *      loading: false
 *      users: data (from API)
 * case: FETCH_USERS_FAILURE
 *      loading: false
 *      error: error (from API)
 *
 *
 * Async action creators
 *
 * axios
 * =====
 * Requests to an API end point
 *
 * redux-thunk
 * ============
 * Define async action creators
 *  Middleware
 *
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: ""
};

export const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST"
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users
  };
};

export const fetchUsersFailure = error => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      //updating state after action fetchusersrequest() is dispatched
      return {
        ...state,
        loading: true
      };

    case "FETCH_USERS_SUCCESS":
      //updating state after action fetchuserssuccess() is dispatched
      return {
        loading: false,
        users: action.payload,
        error: ""
      };

    case "FETCH_USERS_FAILURE":
      //updating state after action fetchusersfailure() is dispatched
      return {
        loading: false,
        users: [],
        error: action.payload
      };
    default:
      return state;
  }
};

/**
 * fetchUsers() is thunk
 * it wraps multiple actions
 */
const fetchUsers = () => {
  return function(dispatch) {
    //dispatches an action for users request
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        //response.data is the array of users
        const users = response.data.map(user => user.id);

        // dispatch an action for user success
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        //error.message is the error description

        //dispatch an action for users failure
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());

ReactDOM.render(<App />, document.getElementById("root"));
