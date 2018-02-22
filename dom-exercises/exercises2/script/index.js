/*let input = Number (prompt("Please enter a number: "));
console.log("Result ", input*input);*/

let btn = document.getElementById("submitknapp");
btn.addEventListener("click", function () {
    let input = document.getElementById("mininput");
    document.getElementById("nummerut").innerHTML += " " + Math.sqrt(input.value);
});

