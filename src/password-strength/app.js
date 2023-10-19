const passInput = document.querySelector("#pass--input");
const charCount = document.querySelector(".char-count");
const strengthStatus = document.querySelector(".strength");
const caseTypes = document.querySelector(".case-types");
const caseElements = caseTypes.querySelectorAll("li");

const POWER = 0;

passInput.addEventListener("input", (e) => {
  const passLength = passInput.value.length;
  charCount.textContent = passLength;

  if (passLength > 4) {
    strengthStatus.textContent = "Medium";
  } else {
    strengthStatus.textContent = "Weak";
  }
});
// lower - 1
// upper -1
// number -2
// sysmbol- 3
