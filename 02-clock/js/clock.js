const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digiTime = document.querySelector('.digital-time');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secToDegree = seconds * 6 + 90;

    const minutes = now.getMinutes();
    const minToDegree = minutes * 6 + 90;

    let hours = now.getHours();
    if (hours < 10) hours = '0' + hours;

    const hoursToDegree = hours * 6 + 90;

    /*if (seconds == 59 || seconds == 0) {

        secondHand.style.transition = `all ${0}s`;
        minHand.style.transition = `all ${0}s`;
        hourHand.style.transition = `all ${0}s`;
    } else {

        secondHand.style.transition = `all ${0.05}s`;
        minHand.style.transition = `all ${0.05}s`;
        hourHand.style.transition = `all ${0.05}s`;
    }*/

    secondHand.style.transform = `rotate(${secToDegree}deg)`;
    minHand.style.transform = `rotate(${minToDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursToDegree}deg)`;

    let digiSeconds = now.getSeconds();
    if (digiSeconds < 10) digiSeconds = '0' + digiSeconds;

    let digiMins = now.getMinutes();
    if (digiMins < 10) digiMins = '0' + digiMins;

    let digiHours = now.getHours();
    if (digiHours < 10) digiHours = '0' + digiHours;

    digiTime.innerHTML = digiHours + ':' + digiMins + ':' + digiSeconds + ' AM';
}

setInterval(setDate, 1000);