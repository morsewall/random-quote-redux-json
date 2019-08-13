import { NEW_QUOTE } from "../constants/constants.js";
import getRandomElement from "../../js/js-modules/getRandomElement.js";
import { quotes } from "../../js/js-modules/makeRequest.js";

//defining action creator. a function that returns an action (object that contains information about an action-event that has occurred). The action creator gets called by `dispatch()`
const newQuoteActionCreator = () => {
  let quoteObject = getRandomElement(quotes);
  return {
    type: NEW_QUOTE,
    payload: quoteObject
  };
};

export default newQuoteActionCreator;
