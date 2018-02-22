let inputone = document.getElementById("input-one");
let inputtwo = document.getElementById("input-two");
let inputthree = document.getElementById("input-three");
let btn = document.getElementById("submitknapp");
btn.addEventListener("click", function () {
    let fieldone = parseInt(inputone.value);
    let fieldtwo = parseInt(inputtwo.value);
    let fieldthree = parseInt(inputthree.value);
    if (fieldone > fieldtwo && fieldone > fieldthree){
        document.getElementById("largestnumber").innerHTML += " " + fieldone;
    }
    else if (fieldone < fieldtwo && fieldtwo > fieldthree){
        document.getElementById("largestnumber").innerHTML += " " + fieldtwo;
    }
    else{
        document.getElementById("largestnumber").innerHTML += " " + fieldthree;
    }
});

/*
let btn = document.getElementById("submitknapp");
function calc() {
    let inputone = document.getElementById("input-one");
    let inputtwo = document.getElementById("input-two");
    let inputthree = document.getElementById("input-three");
    let sum = 3;
    let result = parseInt(inputone.value) + parseInt(inputtwo.value) + parseInt(inputthree.value) / sum;
    //document.getElementById("largestnumber").innerHTML += " " + result;
    document.getElementById("largestnumber").innerHTML = result;
    console.log(result);
}
btn.addEventListener("click", calc);*/
