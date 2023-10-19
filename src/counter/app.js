const counter = document.getElementsByClassName("counter-state")[0];
const incButton = document.getElementsByClassName("inc-button")[0];
const decButton = document.getElementsByClassName("dec-button")[0];
const resetButton = document.getElementsByClassName("reset-button")[0];
const incDecModifier = document.getElementsByClassName("inc-dec--modifier")[0];

incButton.addEventListener("click", (inc) => {
  if (Number(counter.textContent) >= 0) {
    if (Number(counter.textContent) + 1 + Number(incDecModifier.value) > 0) {
      counter.textContent =
        Number(counter.textContent) + 1 + Number(incDecModifier.value);
    } else {
      counter.textContent = 0;
    }
  }
});
decButton.addEventListener("click", (dec) => {
  if (Number(counter.textContent) > 0) {
    counter.textContent =
      Number(counter.textContent) - 1 + Number(incDecModifier.value);
  }
});
resetButton.addEventListener("click", () => {
  counter.textContent = 0;
});
