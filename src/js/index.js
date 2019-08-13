"use strict";

import newQuoteActionCreator from "../redux/actions/actions.js";
import getNextQuoteReducer from "../redux/reducers/reducers.js";
import getTwitterUrl from "./js-modules/getTwitterUrl.js";
import makeRequest from "./js-modules/makeRequest.js/index.js";

// The UMD build makes Redux available as a window.Redux global variable
const Redux = window.Redux;

//creating the Redux store. This is where the state lives.
const store = Redux.createStore(
  getNextQuoteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //second argument is to add Chrome's Redux DevTool's extension https://github.com/zalmoxisus/redux-devtools-extension that allows me to go back in the state history

//defining UI elements
const newQuoteButton = document.getElementById("new-quote");
const quoteTextContent = document.getElementById("text");
const quoteAuthorContent = document.getElementById("author");
const tweetButton = document.getElementById("tweet-quote");

//creating store listener function that is called whenever an action is dispatched to the store. The getState() method retrieves the current state held in the Redux store
store.subscribe(() => {
  //access the state of the app
  const state = store.getState();
  //inject random quote on HTML
  quoteTextContent.innerHTML = state.data.quoteText;
  //inject author on HTML
  quoteAuthorContent.innerHTML = "- " + state.data.quoteAuthor;
  //calling the JS module that generates a Twitter url for Twitter intent
  getTwitterUrl(state.data);
});

//creating UI listeners. Dispatching actions (via the action creators that return a "type" to the reducer) to the redux store. When a new state is set in the Redux store, the store listeners will be retrieving the current state held in the Redux store
newQuoteButton.addEventListener("click", () => {
  store.dispatch(newQuoteActionCreator());
});

//getting initial state, a reset state as the DOM is loaded.
document.addEventListener("DOMContentLoaded", () => {
  //(but only after the array was populated with the API response)
  makeRequest().then(result => {
    //access the state of the app
    const state = store.getState();
    //inject random quote on HTML
    quoteTextContent.innerHTML = state.quoteText;
    //inject author on HTML
    quoteAuthorContent.innerHTML = "- " + state.quoteAuthor;
    //calling the JS module that generates a Twitter url for Twitter intent
    getTwitterUrl(state);
  });
});

export default tweetButton;
