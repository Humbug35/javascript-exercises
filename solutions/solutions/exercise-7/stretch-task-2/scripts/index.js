setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = currentTime.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = currentTime.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.querySelector("div").innerHTML = `Time: ${hours}:${minutes}:${seconds}`;
}, 1000);
