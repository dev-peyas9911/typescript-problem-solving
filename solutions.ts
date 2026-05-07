// Problem 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseString("typescript"));

// Problem 3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

console.log(checkType("Hello"));
console.log(checkType(25));


