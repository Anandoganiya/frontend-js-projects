const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('input[name="todo-input"]');
const todoListContainer = document.querySelector('.todo-list')

todoForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (!todoInput.value) return;

    const todoItem = createTodoItem(todoInput.value);
    todoListContainer.appendChild(todoItem);
})

function createTodoItem(value) {
    const todoItemDiv = document.createElement('div');
    todoItemDiv.classList.add('todo-item');
    const pTag = document.createElement('p');
    pTag.textContent = value;
    const editBtn = document.createElement('button');
    editBtn.value = 'edit';
    editBtn.textContent = 'edit';
    const deleteBtn = document.createElement('button');
    deleteBtn.value = 'delete';
    deleteBtn.textContent = 'delete';
    todoItemDiv.appendChild(pTag);
    todoItemDiv.appendChild(editBtn);
    todoItemDiv.appendChild(deleteBtn);

    return todoItemDiv;
}


todoListContainer.addEventListener('click', (e) => {
    if (e.target.value == 'edit') {
        const input = document.createElement('input');
        const itemValue = e.target.parentElement.firstChild.textContent;
        input.value = itemValue;
        e.target.parentElement.firstChild.remove();
        e.target.parentElement.prepend(input);
        e.target.value = 'save';
        e.target.textContent = 'save'
        
    } else if (e.target.value == 'delete') {
        e.target.parentElement.remove();
    } else if (e.target.value == 'save') {
        const pTag = document.createElement('p');
        pTag.textContent = e.target.parentElement.firstChild.value;
        e.target.parentElement.firstChild.remove();
        e.target.parentElement.prepend(pTag);
        e.target.value = 'edit';
        e.target.textContent = 'edit';
    }
})