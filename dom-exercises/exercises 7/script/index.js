/*
let date = new Date(2018, 00, 03);
let datum = date.toISOString();
let nyttDatum = datum.substring(0, 10);

document.getElementById("datum").innerHTML += nyttDatum;
console.log(nyttDatum);*/


let date = new Date();

let yyyy = date.getFullYear().toString();
let mm = (date.getMonth() + 1).toString();
if(mm.length < 2){
    mm = 0 + mm;
}
let dd  = date.getDate().toString();
if(dd.length < 2){
    dd = 0 + dd;
}
let hour = date.getHours().toString();
let minut = date.getMinutes().toString();

let datestring = yyyy + '-' + mm + '-' + dd + " " + hour + ':' + minut;

document.getElementById("datum").innerHTML += datestring;

/*let inputDate = document.getElementById("dateofbirth");
let yourDay;
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let btn = document.getElementById("submitbtn");
btn.addEventListener("click", function () {
    let newdate = new Date(inputDate.value);
    yourDay = newdate.getDay();
    for (let i = 0; i < weekDays.length; i++) {
        if (yourDay === i) {
            document.getElementById("displayday").innerHTML = weekDays[i];
            console.log("You were born on a " + weekDays[i]);
        }
    }
});*/
/*
setInterval(function(){theTimer();},1000);
function theTimer() {
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById("currenttime").innerHTML = "The current time is " + currentTime;
}*/
let color = {
    1: 'red',
    2: 'green',
    3: 'pink',
    4: 'blue',
    5: 'purple',
    6: 'yellow',
    7: 'black',
    8: 'white',
    9: 'orange',
    10: 'grey'
};

let inputColor = document.getElementById("color");
let btn = document.getElementById("submitknapp");
let objectKeys = Object.keys(color);
btn.addEventListener("click", function() {
    let colorRes = color[objectKeys[parseInt(inputColor.value, 10) - 1]];
    document.getElementById("coloroutput").innerHTML = inputColor.value + ": " + colorRes;
    inputColor.value = '';
});
