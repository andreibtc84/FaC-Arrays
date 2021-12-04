console.log("Connected!");
// Selectors
let input = document.querySelector("#string");
const btn = document.querySelector("#btn");
const filter = document.querySelector("#filter");
const reduce = document.querySelector("#reduce");
const ui = document.querySelector("#uiBox");
let inputArr = [];

// FUNCTIONS

// Filter
const filterArr = (arr) => arr.filter((e) => e % 2 === 0);

// Reduce

const reduceArr = (arr) => arr.reduce((x, y) => x + y);

// Parse input
const parsedInput = () => {
  inputArr = input.value
    .replace(/\D+/g, " ")
    .split("")
    .filter((e) => e != "," && e != " ")
    .map((e) => parseInt(e));
};

// DOM Manipulation
const getInput = () => {
  parsedInput();

  filter.checked === true
    ? (ui.innerText = filterArr(inputArr))
    : (ui.innerText = reduceArr(inputArr));
};

// Event listeners
btn.addEventListener("click", getInput);

// More form validation can be added, for example if user types symbols, or doesn't type anything at all
// Pseudo code
// if input.value.length === 0 , then ui.innerText = "You should enter at least one number"
// if input.value === symbol, then ui.innerText = "You should only enter numbers separated by commas"
