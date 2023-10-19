const horizontalSelector = document.querySelector("#horizontal-selector");
const verticalSelector = document.querySelector("#vertical-selector");
const indicator = document.querySelector("#indicator");
const inputMessage = document.querySelector("#toast-message__input");
const duration = document.querySelector("#duration");
const toastForm = document.querySelector(".form-wrapper");

const leftTopContainer = document.querySelector(".tc-left-top");
const leftBottomContainer = document.querySelector(".tc-left-bottom");
const rightTopContainer = document.querySelector(".tc-right-top");
const rightBottomContainer = document.querySelector(".tc-right-bottom");

toastForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showToast();
});

function showToast() {
  const horizontalValue = horizontalSelector.value;
  const verticalValue = verticalSelector.value;
  const indicatorValue = indicator.value;
  const durationValue = parseInt(duration.value);
  const inputMessageValue = inputMessage.value;
  const toast = createToast(
    horizontalValue,
    indicatorValue,
    durationValue,
    inputMessageValue
  );

  if (horizontalValue === "left")
    if (verticalValue === "Top") {
      leftTopContainer.prepend(toast);
    } else {
      leftBottomContainer.append(toast);
    }
  if (horizontalValue === "right") {
    if (verticalValue === "Top") {
      rightTopContainer.prepend(toast);
    } else {
      rightBottomContainer.append(toast);
    }
  }
}

function createToast(
  horizontalValue,
  indicatorValue,
  durationValue,
  inputMessageValue
) {
  const toastTemplate = document.querySelector("#toast-template");
  const toastDoc = toastTemplate.content.cloneNode(true);
  const toastEl = toastDoc.querySelector(".toast");
  const toastMessage = toastDoc.querySelector(".toast-message");
  const toastRemoveBtn = toastDoc.querySelector(".remove");
  const removeToast = async () => {
    toastEl.classList.add(
      horizontalValue === "left" ? "fadeOutFromLeft" : "fadeOutFromRight"
    );
    await new Promise((resolve) => setTimeout(resolve, 100));
    toastEl.remove();
  };
  toastEl.classList.add(indicatorValue);

  toastMessage.textContent = inputMessageValue;

  toastRemoveBtn.addEventListener("click", removeToast);

  setTimeout(removeToast, durationValue * 1000);

  return toastEl;
}
