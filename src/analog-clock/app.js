const clockDigitsEl = document.querySelector('.digits');
const clockDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 1; i <= 12; i++) {
    const digitsEl = document.createElement('div');
  digitsEl.textContent = i;
  digitsEl.classList.add('digit');
  digitsEl.style.left = 50 + Math.sin(((Math.PI * 2) / 12) * i + 0.5) * 45 + '%';
  digitsEl.style.top = 50 - Math.cos(((Math.PI * 2) / 12) * i + 0.5) * 45 + '%';

  clockDigitsEl.appendChild(digitsEl);
}