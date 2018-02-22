let button = document.getElementById("submit");
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');

button.addEventListener('click', function() {
    console.log("Name: ", firstName.value, lastName.value);
});