let button = document.getElementById("btn");
let paragraph = document.getElementById('text');

button.addEventListener('click', function(event) {
    paragraph.style.color = "green";
    paragraph.style.fontSize = "40px";
    paragraph.setAttribute("style", "color: green; font-size: 40px;")
});