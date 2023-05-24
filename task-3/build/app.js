"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const quote = document.getElementById("quote");
const fetchQuoteButton = document.getElementById("button");
const addButton = document.getElementById("addButton");
const quoteList = document.getElementById("quoteList");
let currentQuote = "";
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://icanhazdadjoke.com/", {
            headers: {
                accept: "application/json",
            },
        });
        let jokeData = yield response.json();
        console.log(jokeData.joke);
        if (quote) {
            quote.textContent = jokeData.joke;
            currentQuote = jokeData.joke;
        }
    });
}
function addQuoteToList() {
    if (quoteList && currentQuote) {
        const newListItem = document.createElement("li");
        newListItem.textContent = currentQuote;
        quoteList.appendChild(newListItem);
    }
}
if (fetchQuoteButton) {
    fetchQuoteButton.addEventListener("click", fetchJoke);
}
if (addButton) {
    addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", addQuoteToList);
}
fetchJoke();
