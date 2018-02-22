let button = document.getElementById("submit");
let month = parseInt(document.getElementById("month").value) + 1;
let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekdayOfBirth = document.querySelector("div");
button.addEventListener('click', () => {
    let year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value) - 1;
    let date = parseInt(document.getElementById("date").value);
    let birthDate = new Date(year,month,date);
    let weekday = birthDate.getDay();
    for(let i=0; i < weekdays.length; i++) {
        if(i === weekday) {
            weekdayOfBirth.innerHTML = weekdays[i];
        }
    }
});
