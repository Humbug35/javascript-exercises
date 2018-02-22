let input = document.getElementById("number-input");
let number = Math.floor(Math.random() * 30) + 1;
let klicka = document.getElementById("klick");
let btn = document.getElementById("knapp"), count = 0;
btn.addEventListener("click", function () {
    count += 1;
    if(count > 4){
        alert("Du förlorade, HAHA!");
        location.reload(true);
    }
    else{
        if(parseInt(input.value) !== number){
            document.getElementById("number-output").innerHTML = input.value;
            document.getElementById("output-number").innerHTML =  number;
            klicka.innerHTML = count;
            console.log("Prova igen!" + "" + number)
            if(input.value < number){
                alert("Ditt nummer är för lågt");
            }
            else{
                alert("Ditt nummer är för högt");
            }
        }
        else{
            document.getElementById("number-output").innerHTML = input.value;
            document.getElementById("output-number").innerHTML = number;
            alert("Grattis, du lyckades gissa rätt!");
            location.reload(true);
            console.log("Grattis, du svarade rätt!");
        }
    }

});

/*
let btn = document.getElementById("knapp");
btn.addEventListener("click", function () {

});*/
