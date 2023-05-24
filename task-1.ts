// Declare some variables in Typescript

// Using type inference
// using explicit type annotation

// string
let resultResponse = "correct, well done!";
let realResponse: string = "correct, well done!";

// number
let secondAnswer = 9;
let secondAnswer2: number = 10;

// an array of booleans
let answerForm = [true, true, false, false];
let answerForm2: boolean[] = [true, true, false, false];

// an array of numbers
let numbersArray = [1, 2, 3, 4, 5];
let numbersArray2: number[] = [1, 2, 3, 4, 5];

// an array of string
let stringArray = ["this", "is", "the", "string", "array"];
let stringArray2: string[] = ["this", "is", "the", "string", "array"];

function answer(number1: number, number2: number) {
  console.log(number1 + number2);
}
answer(3, 4);

type user = {
  amount: number;
  uniqueId: string;
  isValid: boolean;
  addressLines: string[];
};

type colour = "BLUE" | "YELLOW";
