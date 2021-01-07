const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    const now = new Date();
    // getting the time.
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    // converting them it to degrees.
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minDegrees = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360) + 90;
    // updating the styles for the clock.
    if (secondsDegrees === 90) {
        secondHand.style.transitionTimingFunction = 'none';
    } else {
        secondHand.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);