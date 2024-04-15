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
    if (e.target.value == 'Edit') {
        const contentElement = e.currentTarget.querySelector('.todo-content');
        const content = contentElement.textContent;
        const input = document.createElement('input');
        input.value = content;
        e.currentTarget.prepend(input);
        console.log(content)
        contentElement.remove();

    } else if(e.target.value == "Delete") {
        e.currentTarget.remove();
    }
}