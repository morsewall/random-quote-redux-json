//asynchronous function that gets data from the API and populates the quotes array
const quotes;

const makeRequest = async () => {
  const responseJSON = await fetch(
    "https://cdn.jsdelivr.net/gh/morsewall/jsondb@master/db.json"
  );
  return quotes = await responseJSON.json();
};

export { makeRequest, quotes };
