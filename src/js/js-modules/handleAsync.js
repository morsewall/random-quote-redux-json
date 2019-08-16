import { requestingApiData } from "../../redux/actions/actions.js";
import { receivedApiData } from "../../redux/actions/actions.js";

// defining a special action creator that returns a function. The returned function takes dispatch as an argument. Within this function, I can dispatch actions and perform asynchronous requests. It's common to dispatch an action before initiating any asynchronous behavior so that the application state knows that some data is being requested (this state could display a loading icon, for instance). Then, once the application receives the data, another action is dispatched, an action that carries the data as a payload along with information that the action is completed.
const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here
    store.dispatch(requestingApiData());
    const makeRequest = async () => {
      const responseJSON = await fetch(
        "https://cdn.jsdelivr.net/gh/morsewall/jsondb@master/db.json"
      );
      const responseObject = await responseJSON.json();
      const quotes = responseObject.quotes;
      // console.log(quotes);
      // dispatch received data action here
      store.dispatch(receivedApiData(quotes));
      // console.log(receivedApiData(quotes));
    };
    makeRequest();
  };
};

export default handleAsync;
