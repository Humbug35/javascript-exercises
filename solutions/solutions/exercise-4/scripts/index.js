let button = document.getElementById("submit");

button.addEventListener('click', () => {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let output = document.getElementById("result");
    let maxNumber = 0;
    if(number1 > number2) {
        maxNumber = number1;
    } else {
        maxNumber = number2;
    }
    output.innerHTML = maxNumber.toString();
});


