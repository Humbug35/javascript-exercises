let message = document.getElementById("message");
let button = document.getElementById("submit");
let output = document.getElementById("messageOutput");
let messages = [];
let currentDate = new Date();

currentDate.getFullYear();
currentDate.getMonth();
currentDate.getDate();
currentDate.getHours();
currentDate.getMinutes();
currentDate.getSeconds();



button.addEventListener("click", function () {
    messages.push({
        message: message.value,
        timeStamp: currentDate
    });
    output.innerHTML = "";
    for(let message of messages){
        output.innerHTML += `Your messages: 
        <p>Message: ${message.message}</p>
        <p>Time: ${message.timeStamp}</p>
        `;
    }
    message.value = "";
});