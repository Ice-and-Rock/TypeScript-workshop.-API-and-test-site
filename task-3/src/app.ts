const quote: HTMLElement | null = document.getElementById("quote");
const fetchQuoteButton: HTMLElement | null = document.getElementById("button");
const addButton: HTMLElement | null = document.getElementById("addButton");
const quoteList: HTMLElement | null = document.getElementById("quoteList");

let currentQuote: string = "";

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json",
    },
  });

  let jokeData = await response.json();
  console.log(jokeData.joke);

  if (quote) {
    quote.textContent = jokeData.joke;
    currentQuote = jokeData.joke;
  }
}

function addQuoteToList() {
  if (quoteList && currentQuote) {
    const newListItem = document.createElement("li");
    newListItem.textContent = currentQuote;
    quoteList.appendChild(newListItem);
    console.log("add button pressed");
  }
}

if (fetchQuoteButton) {
  fetchQuoteButton.addEventListener("click", fetchJoke);
}
if (addButton) {
  addButton.addEventListener("click", addQuoteToList);
}

fetchJoke();
