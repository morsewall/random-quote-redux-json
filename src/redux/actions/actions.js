import { NEW_QUOTE } from "../constants/constants.js";
import { REQUESTING_API_DATA } from "../constants/constants.js";
import { RECEIVED_API_DATA } from "../constants/constants.js";
import getRandomElementSelector from "../../js/js-modules/getRandomElementSelector.js";

// defining action creators related to the asynch function. Action creator is  a function that returns an action (object that contains information about an action-event that has occurred). The action creator gets called by `dispatch()`
const requestingApiData = () => {
  return {
    type: REQUESTING_API_DATA
  };
};

const receivedApiData = apiData => {
  return {
    type: RECEIVED_API_DATA,
    quotes: apiData
  };
};

//defining action creator related to the "Get New Quote" button. a function that returns an action (object that contains information about an action-event that has occurred). The action creator gets called by `dispatch()`
const newQuoteActionCreator = () => {
  const state = store.getState();
  let quoteObject = getRandomElementSelector(state);
  return {
    type: NEW_QUOTE,
    payload: quoteObject
  };
};

export { newQuoteActionCreator, requestingApiData, receivedApiData };
