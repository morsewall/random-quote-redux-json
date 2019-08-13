//asynchronous function that gets data from the API and populates the quotes array
const makeRequest = async () => {
  const responseJSON = await fetch(
    "https://cdn.jsdelivr.net/gh/morsewall/jsondb@master/db.json"
  );
  const quotes = await responseJSON.json();
  return quotes;
};

export { makeRequest, quotes };
