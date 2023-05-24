const quote = document.getElementById("quote");
const fetchQuoteButton = document.getElementById("button");

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
  }
  if (fetchQuoteButton) {
    fetchQuoteButton.addEventListener("click", fetchJoke);
  }
}

fetchJoke();
