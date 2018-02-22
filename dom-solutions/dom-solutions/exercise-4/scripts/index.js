let button = document.getElementById("submit");
let remove = document.getElementById("remove");
let table = document.getElementById('table');

button.addEventListener('click', function() {
    let newRow = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = "NEW";
    cell2.innerHTML = "NEW NEW";
});

remove.addEventListener('click', function() {
    table.deleteRow(0);
});