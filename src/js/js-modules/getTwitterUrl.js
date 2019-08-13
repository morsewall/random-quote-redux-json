import tweetButton from "../index.js";

//defining function that generates a Twitter URL (for Twitter intent) and inject url on HTML, making it a JS function/module
const getTwitterUrl = quoteObject => {
  //truncating quote text in case full tweet gets to be over 280 characters
  let quoteTextElem = quoteObject.quoteText;
  let quoteAuthorElem = " - " + quoteObject.quoteAuthor;
  let contentQuote = quoteTextElem + quoteAuthorElem;
  if (contentQuote.length > 280) {
    let charCountAuthor = quoteAuthorElem.length;
    const extraStylingChar = "..." + '"';
    let extraCharCount = extraStylingChar.length;
    let subString =
      quoteTextElem.substring(0, 280 - extraCharCount - charCountAuthor) +
      extraStylingChar +
      quoteAuthorElem;
    //generate url available for Twitter intent and inject url on HTML
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + subString;
  } else {
    //generate url available for Twitter intent and inject url on HTML
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + contentQuote;
  }
};

export default getTwitterUrl;
