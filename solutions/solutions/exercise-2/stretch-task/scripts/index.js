let button = document.getElementById("submitButton");
button.addEventListener('click', () => {
    let input = document.getElementById("numberInput").value;
    let output = document.getElementsByTagName("span")[0];
    output.innerHTML = (input*input).toString();
});