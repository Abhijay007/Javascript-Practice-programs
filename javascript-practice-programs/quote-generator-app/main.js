"use strict";

const getQuoteBtn = document.querySelector(".get-quote");
const viewMoreQuoteBtn = document.querySelector(".more-quote");

const mainSection = document.querySelector(".main");
const subSection = document.querySelector(".more-quotes");
const statusMsg = document.querySelector(".status");

//url to get quote data
let url = `https://quote-garden.herokuapp.com/api/v3/quotes?`;

// dispay error messages or loading status
function displayStatusMsg(text) {
  const html = `
      <p class="statusMsg">${text}</p>
    `;

  statusMsg.innerHTML = html;
}

//fetch data function has outsourced so it can use without repeating the same code
const fetchData = function (url) {
  //this function will take the msg as the argument to show loading status
  displayStatusMsg("loading...");
  return fetch(url).then((res) => {
    statusMsg.innerHTML = "";
    if (!res.ok) throw new Error("something went wrong");
    return res.json();
  });
};

//this function takes the quote and the author as the parameters
const displayMainQuote = function (text, author) {
  //as we have fetched the data we can stop displying the status msg
  statusMsg.innerHTML = "";
  const html = `
    <div class="quote">
    <p class="main-quote">
     " ${text}"
    </p>
    <p class="author">${author}</p>
    </div>
    <button class="more-quote">View more Quotes of ${author}</button>
    `;

  mainSection.innerHTML = html;
  const viewMoreQuoteBtn = document.querySelector(".more-quote");

  viewMoreQuoteBtn.addEventListener("click", function () {
    displayMorequotes(author);
  });
};

//display sub quotes
const displaySubQUotes = function (author, text) {
  statusMsg.innerHTML = "";
  const html = `
    <div class="sub-quotes">
    <p class="sub-quote">
    " ${text}"
    </p>
    <p class="author">${author}</p>
    </div>
    `;

  subSection.insertAdjacentHTML("beforeend", html);
};

//fetch quotes data
getQuoteBtn.addEventListener("click", function () {
  //before displaying a new quote we  remove previous quotes from the UI
  subSection.innerHTML = "";
  mainSection.innerHTML = "";
  //to get random number below 200
  const number = Math.trunc(Math.random() * 200);

  //we update the Url with requesting 200 quotes as giving the limit
  let updatedUrl = `${url}limit=200`;
  fetchData(updatedUrl)
    .then((data) => {
      // destructure the received data to get the quote and the author
      const { quoteAuthor, quoteText } = data.data[number];

      //call displayMainQuote function to display the new quote
      displayMainQuote(quoteText, quoteAuthor);
    })
    .catch((error) => displayStatusMsg(error.message));
});

// display more quotes
const displayMorequotes = function (author) {
  //we update the Url with requesting 20 quotes from the given author
  let urlMoreQuotes = `${url}author=${author}&limit=20`;
  fetchData(urlMoreQuotes)
    .then((data) => {
      data.data?.map((each) => {
        displaySubQUotes(each.quoteAuthor, each.quoteText);
      });
    })
    .catch((error) => displayStatusMsg(error.message));
};
