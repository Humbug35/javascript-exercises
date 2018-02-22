let input = prompt("Please enter two numbers, separated by a comma(,): ");
let numbers = input.split(',');
let one = parseInt(numbers[0]);
let two = parseInt(numbers[1]);
console.log("Result: ", one+two);
