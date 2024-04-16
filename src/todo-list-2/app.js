const todoInput = document.querySelector('#todo-input');
const todoListItems = document.querySelector('.todo-list-items');

todoInput.addEventListener('change', (e) => {
    const todoContent = e.target.value;
    const listItem = createItemItem(todoContent);
    todoListItems.appendChild(listItem);
});

function createItemItem(todoContent) {
    const li = document.createElement('li');
    li.classList.add('todo-list-item');
    const content = `<div class="todo-content">${todoContent}</div>
                    <button value="Edit">Edit</button>
                    <button value="Delete">Delete</button>`;
    li.addEventListener('click',performOperation);
    li.innerHTML = content;
    return li;
}

function performOperation(e) {
    const targetedButton = e.target;
    if (targetedButton.value == 'Edit') {
        const contentElement = e.currentTarget.querySelector('.todo-content');
        const content = contentElement.textContent;
        const input = document.createElement('input');
        input.classList.add('edit-content');
        input.value = content;
        e.currentTarget.prepend(input);
        targetedButton.value = 'Save';
        targetedButton.textContent = 'Save';
        contentElement.remove();

    } else if(targetedButton.value == "Delete") {
        e.currentTarget.remove();
    } else if (targetedButton.value == "Save") {
        const inputContentElement = e.currentTarget.querySelector('.edit-content');
        const content = inputContentElement.value;
        const div = document.createElement('div');
        div.textContent = content;
        div.classList.add('todo-content');
        e.currentTarget.prepend(div);
        inputContentElement.remove();
        targetedButton.value = "Edit";
        targetedButton.textContent = "Edit";

    }
}

['test1', 'test2', 'test3'].forEach(item => {
    const listItem = createItemItem(item)
    todoListItems.appendChild(listItem)
});
