import { NEW_QUOTE } from "../constants/constants.js";
import getRandomElement from "../../js/js-modules/getRandomElement.js";
import { quotes } from "../../js/js-modules/makeRequest.js";

//defining initial state
const defaultQuote = getRandomElement(quotes);

//defining reducer function to allow the Redux store to know how to respond to the action created
const getNextQuoteReducer = (state = defaultQuote, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default getNextQuoteReducer;
