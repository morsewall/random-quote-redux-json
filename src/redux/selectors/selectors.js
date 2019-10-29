//defining a Redux selection, i.e. it takes Redux state as an argument and return some data from it
const getRandomElementSelector = stateObject => {
  let array = stateObject.quotes;
  //access random quote from array
  return array[Math.floor(Math.random() * array.length)];
};

export default getRandomElementSelector;
