import Stack from "../../src/data-structure/stack.js";

import Prompt from 'prompt-sync';

const prompt = Prompt();

// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "about:blank";

// ------------------------------
// Helper Functions
// ------------------------------
const showCurrentPage = (action) => {
  console.log(action);
  console.log("Current page = ", currentPage);
  console.log("Back page = ", backPages.peek());
  console.log("Next page = ", nextPages.peek());
};

const newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;

  // clear nextPages stack
  if (!nextPages.isEmpty()) {
    nextPages.pop();
  }

  showCurrentPage("NEW: ");
};

const backPage = () => {
  nextPages.push(currentPage);

  currentPage = backPages.pop();

  showCurrentPage("BACK: ");
};

const nextPage = () => {
  backPages.push(currentPage);

  currentPage = nextPages.pop();

  showCurrentPage("NEXT: ");
};

/*
 * The following strings are used to prompt the user
 */
const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// ------------------------------
// User Interface Part 1
// ------------------------------
let finish = false;

let showBack = false;
let showNext = false;

showCurrentPage("DEFAULT: ");

while (!finish) {
  let instructions = baseInfo;

  if (!backPages.isEmpty()) {
    instructions = instructions + ", " + backInfo;
    showBack = true;
  } else {
    showBack = false;
  }

  if (!nextPages.isEmpty()) {
    instructions = instructions + ", " + nextInfo;
    showNext = true;
  } else {
    showNext = false;
  }

  // enable the user to quit the program
  instructions = instructions + ", " + quitInfo;

  // print the instructions
  console.log(instructions);

  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  const answer = prompt("Where would you like to go today? ");
  const lowerCaseAnswer = answer.toLowerCase();

  if (
    lowerCaseAnswer !== "n" &&
    lowerCaseAnswer !== "b" &&
    lowerCaseAnswer !== "q"
  ) {
    // we create a new page based on the url
    newPage(answer);
  } else if (showNext === true && lowerCaseAnswer === "n") {
    // we navigate forward a page
    nextPage();
  } else if (showBack === true && lowerCaseAnswer === "b") {
    // we navigate back a page
    backPage();
  } else if (lowerCaseAnswer === "b") {
    // invalid input to a non-available option
    console.log("Cannot go back a page. Stack is empty.");
  } else if (lowerCaseAnswer === "n") {
    // invalid input to a non-available option
    console.log("Cannot go to the next page. Stack is empty.");
  } else if (lowerCaseAnswer === "q") {
    // we quit the program
    finish = true;
  }
}
