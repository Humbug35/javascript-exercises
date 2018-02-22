/*let input = parseInt (prompt("Please enter a number: "));
let inputen = parseInt (prompt("Please enter a number: "));
let result = input + inputen;
console.log(result);
document.getElementById("number-output").innerHTML = result;*/

let string = (prompt("Please enter two numbers: "));
let splita = string.split(",");
let nummer1 = Number(splita[0]);
let nummer2 = Number(splita[1]);

let result = nummer1 + nummer2;
console.log(result);
document.getElementById("number-output").innerHTML = result;




