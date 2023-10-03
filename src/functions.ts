import { functionExercise } from "./exercises/functionsExercise";

// Function parameter type annotation
function square(num: number) {
  return num * num;
}

function greet(name: string) {
  return `Hi there, ${name}`;
}

function personInfo(name: string, age: number, isFunny = false) {
  return `Name: ${name}, Age: ${age}, isFunny: ${isFunny}`;
}

function printMe(): void {
  console.log("Print Me");
}

// function random(num: number) {
//   if (Math.random() < 0.5) {
//     return num.toString();
//   }
//   return num;
// }

function sum<T extends number>(values: T[]): number {
  let result = 0;
  for (let value of values) {
    result += value;
  }

  return result;
}

function toUpperCase<T extends string>(value: T): string {
  const newValue = value.toUpperCase();
  return newValue;
}

function toLowerCase<T extends string>(value: T): string {
  return value.toLowerCase();
}

function capitalize<T extends string>(value: T): string {
  return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
}

export default function() {
  console.log(square(5));
  console.log(greet("Raven"));
  console.log(personInfo("Raven", 31, true));
  // void return type
  printMe();

  // playing with generics maybe this is wrong lol
  console.log(sum<number>([1, 2, 3, 4, 5]));
  console.log(sum<number>([1.0, 2.0, 3.0, 4.0, 5.5]));

  let colors = ["red", "orange", "yellow"];
  colors = colors.map(toUpperCase);
  colors = colors.map(toLowerCase);
  colors = colors.map(capitalize);
  console.log(colors);

  // Never type -> don't quite understand this lol

  // The never type represents values that NEVER occur.
  // We might use it to annotate a function that always throws an exception,
  // or a function that never finishes executing.
  const makeError = (msg: string): never => {
    throw new Error(msg);
  };

  const gameLoop = (): never => {
    while (true) {
      console.log("GAME LOOP RUNNING!");
    }
  };

  // Function Exercise
  functionExercise();
}
