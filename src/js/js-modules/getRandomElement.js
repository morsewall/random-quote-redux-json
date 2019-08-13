//defining function that accesses random element from array, making it a JS function/module
const getRandomElement = array => {
  //access random quote from array
  return array[Math.floor(Math.random() * array.length)];
};

export default getRandomElement;
