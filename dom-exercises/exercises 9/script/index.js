let saldo = 0;
document.getElementById("nytt-saldo").innerHTML = saldo + " kr";
let insattning = document.getElementById("insättning");


let btninsattning = document.getElementById("insattnings-knapp");
btninsattning.addEventListener("click", function () {
    let addaccount = parseInt(insattning.value, 10);
    saldo = saldo + addaccount;
    document.getElementById("nytt-saldo").innerHTML = saldo + " kr";
});

let uttag = document.getElementById("uttag");
let btnuttag = document.getElementById("uttags-knapp");

btnuttag.addEventListener("click", function () {
    let addaccount = parseInt(uttag.value, 10);
    saldo = saldo - addaccount;
    document.getElementById("nytt-saldo").innerHTML = saldo + " kr";
});