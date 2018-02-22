let fullName = prompt("Please enter your full name. Separate your first and last name with" +
    "a space: ").split(" ");
let firstName = fullName[0];
let lastName = fullName[1];

document.getElementById("first-name").innerHTML = firstName;
document.getElementById("last-name").innerHTML = lastName;
