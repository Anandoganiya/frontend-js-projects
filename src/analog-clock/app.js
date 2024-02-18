const hoursHand = document.querySelector('.hour-line');
const minutesHand = document.querySelector('.min-line');
const secondsHand = document.querySelector('.sec-line');
const clockDigitsEl = document.querySelector('.digits');
const clockDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < clockDigits.length; i++) {
  const digitsEl = document.createElement('div');
  digitsEl.textContent = clockDigits[i];
  digitsEl.classList.add('digit');
  digitsEl.style.left = 50 + Math.sin(((Math.PI * 2) / clockDigits.length) * i + 0.5) * 45 + '%';
  digitsEl.style.top = 50 - Math.cos(((Math.PI * 2) / clockDigits.length) * i + 0.5) * 45 + '%';
  clockDigitsEl.appendChild(digitsEl);
}

const getTimeInAngles = (date) => {
  return {
    seconds: 6 * date.getSeconds(),
    minutes: 6 * date.getMinutes(),
    hours: 30 * date.getHours() + date.getMinutes()/2,
  };
};

const setClockHands = () => {
  const date = new Date();
  const angles = getTimeInAngles(date);
  hoursHand.style.transform = `rotate(${angles.hours}deg)`;
  minutesHand.style.transform = `rotate(${angles.minutes}deg)`;
  secondsHand.style.transform = `rotate(${angles.seconds}deg)`;
};

setInterval(setClockHands, 1000);
setClockHands();
