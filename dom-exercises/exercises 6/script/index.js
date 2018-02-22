let string = prompt("Please enter your name: ");
let splita = string.split(' ', 2);
let firstname = splita[0];
let lastname = splita[1];


document.getElementById("förnamn").innerHTML += firstname.toLowerCase();
document.getElementById("efternamn").innerHTML += lastname.toUpperCase();
