let button = document.getElementById("submit");

button.addEventListener('click', () => {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let number3 = document.getElementById("number3").value;
    let output = document.getElementById("result");
    let maxNumber = 0;
    if(number1 > number2) {
        maxNumber = number1;
    } else if(number2 > maxNumber){
        maxNumber = number2;
    } else if(number3 > maxNumber) {
        maxNumber = number3;
    }
    output.innerHTML = maxNumber.toString();
});


