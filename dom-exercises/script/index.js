/*var btn = document.getElementById("knapp");
  let paragraf = document.getElementById("text");
btn.addEventListener("click", function () {
    document.getElementById("text").style.color = "red";
    document.getElementById("text").style.fontSize = "200px";
    paragraf.setAttribute("style", "color: red; font-size: 200px;")
});*/

/*var inputnamn = document.getElementById('fält1');
var inputnamnet = document.getElementById('fält2');
document.querySelector('form').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(inputnamn.value);
    console.log(inputnamnet.value);
});*/
/*
var linkbutton = document.getElementById("knappen");
var attributt = document.getElementById("länk");
linkbutton.addEventListener('click', function (e) {

    e.preventDefault();

    console.log(attributt.getAttribute("id"));
    console.log(attributt.getAttribute("href"));
    console.log(attributt.getAttribute("hreflang"));
    console.log(attributt.getAttribute("target"));
    console.log(id, href, hreflang, target);
});
*/
/*let btn = document.getElementById("nyrad");
btn.addEventListener("click", function(){
    let table = document.getElementById("tabell");
    let row = table.insertRow(4);
    let cell1 = row.insertCell(0); cell1.innerHTML = "Daniel";
    let cell2 = row.insertCell(1); cell2.innerHTML = "Plume";
    let cell3 = row.insertCell(2); cell3.innerHTML = "23 år";
    let cell4 = row.insertCell(3); cell4.innerHTML = "Helsingborg";
});

let button = document.getElementById("tabortrad");
button.addEventListener("click", function(){
    let table = document.getElementById("tabell");
    let row = table.deleteRow(1);
});*/

let btn = document.getElementById("knapp");
btn.addEventListener("click", function () {
    let w = innerWidth;
    let h = innerHeight;
    document.getElementById("demo").innerHTML = "Width: " + w + "<br>Height: " + h;
});


