"use strict";

import { newQuoteActionCreator } from "../redux/actions/actions.js";
import getNextQuoteReducer from "../redux/reducers/reducers.js";
import getTwitterUrl from "./js-modules/getTwitterUrl.js";
import handleAsync from "./js-modules/handleAsync.js";
import getRandomElementSelector from "../redux/selectors/selectors.js";

// The UMD build makes Redux available as a window.Redux global variable
const Redux = window.Redux;

// The UMD build makes Redux-Thunk available as a window.ReduxThunk.default global variable
const ReduxThunk = window.ReduxThunk.default;

//to add Chrome's Redux DevTool's extension https://github.com/zalmoxisus/redux-devtools-extension that allows me to go back in the state history. When the extension is not installed, I'm using Redux’s compose.
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;

//creating the Redux store, including Redux Thunk middleware. This is where the state lives.
export const store = Redux.createStore(
  getNextQuoteReducer,
  /* preloadedState, */ composeEnhancers(Redux.applyMiddleware(ReduxThunk))
);

//dispatching the asynch special action creator
store.dispatch(handleAsync());

//defining UI elements
const newQuoteButton = document.getElementById("new-quote");
const quoteTextContent = document.getElementById("text");
const quoteAuthorContent = document.getElementById("author");
export const tweetButton = document.getElementById("tweet-quote");

//creating store listener function that is called whenever an action is dispatched to the store. The getState() method retrieves the current state held in the Redux store
store.subscribe(() => {
  const state = store.getState();
  if (state.status == "waiting") {
    console.log("Loading…");
  }
  if (state.status == "received") {
    let quoteObject = getRandomElementSelector(state);
    //inject random quote on HTML
    quoteTextContent.innerHTML = quoteObject.quoteText;
    //inject author on HTML
    quoteAuthorContent.innerHTML = "- " + quoteObject.quoteAuthor;
    //calling the JS module that generates a Twitter url for Twitter intent
    getTwitterUrl(quoteObject);
  }
  if (state.status == "new quote") {
    //inject random quote on HTML
    quoteTextContent.innerHTML = state.data.quoteText;
    //inject author on HTML
    quoteAuthorContent.innerHTML = "- " + state.data.quoteAuthor;
    //calling the JS module that generates a Twitter url for Twitter intent
    getTwitterUrl(state.data);
  }
});

//creating UI listeners. Dispatching actions (via the action creators that return a "type" to the reducer) to the redux store. When a new state is set in the Redux store, the store listeners will be retrieving the current state held in the Redux store
newQuoteButton.addEventListener("click", () => {
  store.dispatch(newQuoteActionCreator());
});
