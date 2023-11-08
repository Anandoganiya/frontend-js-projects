const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const itemsList = document.querySelector(".items-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!todoInput.value) {
    alert("item value is empty");
    return;
  }
  createTodo(todoInput.value);
});

function createTodo(itemValue) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const itemChecked = document.createElement("input");
  itemChecked.type = "checkbox";
  itemChecked.classList.add("item-checkbox");
  editButton.classList.add("edit");
  deleteButton.classList.add("delete");
  div.textContent = itemValue;
  editButton.textContent = "🖊️";
  deleteButton.textContent = "❌";
  li.appendChild(div);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  li.appendChild(itemChecked);
  itemsList.appendChild(li);
}

itemsList.addEventListener("click", (e) => {
  const operationType = e.target.classList.value;
  if (operationType === "delete") e.target.parentElement.remove();
  else if (operationType === "edit") {
    const li = e.target.parentElement;
    const editButton = li.querySelector(".edit");
    const itemValue = li.firstElementChild.textContent;
    const input = document.createElement("input");
    editButton.textContent = "💾";
    editButton.classList.remove("edit");
    editButton.classList.add("save");
    input.value = itemValue;
    li.replaceChild(input, li.firstElementChild);
  } else if (operationType === "save") {
    const li = e.target.parentElement;
    const itemInputValue = li.firstElementChild.value;
    const saveButton = li.querySelector(".save");
    saveButton.textContent = "🖊️";
    saveButton.classList.remove("save");
    saveButton.classList.add("edit");
    const div = document.createElement("div");
    div.textContent = itemInputValue;
    li.replaceChild(div, li.firstElementChild);
  } else if (operationType === "item-checkbox") {
    const li = e.target.parentElement;
    const itemContentElement = li.firstElementChild;
    const checkboxElement = li.querySelector(".item-checkbox");
    if (checkboxElement.checked) {
      itemContentElement.classList.add("checked");
    } else {
      itemContentElement.classList.remove("checked");
    }
  }
});
