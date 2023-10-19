const guessInput = document.querySelector(".guess-input");
const submitButton = document.querySelector(".submit-button");
const startButton = document.querySelector(".start-button");
const guessResult = document.querySelector(".guess-result");
const guesses = document.querySelector(".guesses");

const TOTAL_GUESSES = [];

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const randomNumber = generateRandomNumber();
startButton.disabled = true;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const guessInputValue = parseInt(guessInput.value);
  const randomNumb = parseInt(randomNumber);
  if (!guessInputValue) return;
  if (guessInputValue > 100) return;
  if (TOTAL_GUESSES.length === 10) {
    guessResult.textContent = `limit guess exceeded`;
    startButton.disabled = false;
    submitButton.disabled = true;
    return;
  }
  if (guessInputValue === randomNumb) {
    guessResult.textContent = `You Won the number is ${randomNumb}`;
    startButton.disabled = false;
    submitButton.disabled = true;
  } else if (guessInputValue > randomNumb) {
    guessResult.textContent = "too high";
    TOTAL_GUESSES.push(guessInputValue);
  } else {
    guessResult.textContent = "too low";
    TOTAL_GUESSES.push(guessInputValue);
  }
  guesses.textContent = TOTAL_GUESSES.join(",");
});

startButton.addEventListener("click", () => {
  guessResult.textContent = "";
  TOTAL_GUESSES = [];
  startButton.disabled = false;
  submitButton.disabled = true;
});
