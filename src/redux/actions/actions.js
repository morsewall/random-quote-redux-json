import { NEW_QUOTE } from "../constants/constants.js";
import { REQUESTING_API_DATA } from "../constants/constants.js";
import { RECEIVED_API_DATA } from "../constants/constants.js";
import getRandomElementSelector from "../selectors/selectors.js";
import { store } from "../../js/index.js";

// defining action creators related to the asynch function. Action creator is a function that returns an action (object that contains information about an action-event that has occurred). The action creator gets called by `dispatch()`
export const requestingApiData = () => {
  return {
    type: REQUESTING_API_DATA
  };
};

export const receivedApiData = apiData => {
  return {
    type: RECEIVED_API_DATA,
    payloadQuotes: apiData
  };
};

//defining action creator related to the "Get New Quote" button. a function that returns an action (object that contains information about an action-event that has occurred). The action creator gets called by `dispatch()`
export const newQuoteActionCreator = () => {
  const state = store.getState();
  let quoteObject = getRandomElementSelector(state);
  return {
    type: NEW_QUOTE,
    payloadQuote: quoteObject
  };
};
