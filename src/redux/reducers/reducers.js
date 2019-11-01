import { NEW_QUOTE } from "../constants/constants.js";
import { REQUESTING_API_DATA } from "../constants/constants.js";
import { RECEIVED_API_DATA } from "../constants/constants.js";

// defining default state
const defaultState = {
  status: "",
  quotesData: []
};

//defining reducer functions to allow the Redux store to know how to respond to the action created
const getNextQuoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_API_DATA:
      return {
        ...state,
        status: "waiting",
        quotesData: []
      };
    case RECEIVED_API_DATA:
      return {
        ...state,
        status: "received",
        quotesData: action.quotes
      };
    case NEW_QUOTE:
      return {
        ...state,
        status: "new quote",
        data: action.payload
      };
    default:
      return state;
  }
};

export default getNextQuoteReducer;
