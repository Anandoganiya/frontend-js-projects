const searchInput = document.querySelector('input[name="search"]');
const list = document.querySelector('.list');
import { suggestionsList } from './list.js';
let selectedList = [];
let suggestionIndex = -1;

searchInput.addEventListener('input', (e) => {
    suggestionIndex = -1;
    const searchStr = e.currentTarget.value;
    list.innerHTML = '';
    if (searchStr == '')
        return;
     selectedList = suggestionsList.filter(item => item.toLowerCase().includes(searchStr.toLowerCase())).slice(0,5);
    generateItems(selectedList);
});

function generateItems(matchedItems) {
    matchedItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.textContent = item;
        list.appendChild(li);
    });
}

searchInput.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowDown') {
        suggestionIndex += 1;
        if (suggestionIndex >= list.childNodes.length) {
            suggestionIndex = -1;
            list.childNodes.forEach(item => {
                if(item.classList.contains('active')) item.classList.remove('active')
            })
            return;
        }
        list.childNodes.forEach(item => {
            if(item.classList.contains('active')) item.classList.remove('active')
        })
        list.childNodes[suggestionIndex].classList.add('active');
        searchInput.value = list.childNodes[suggestionIndex].textContent;
    } else if (e.key == 'ArrowUp') {
        e.preventDefault();
        suggestionIndex -= 1;
        if (suggestionIndex < 0) {
            suggestionIndex = -1;
            list.childNodes.forEach(item => {
                if(item.classList.contains('active')) item.classList.remove('active')
            })
            return;
        }
        list.childNodes.forEach(item => {
            if(item.classList.contains('active')) item.classList.remove('active')
        })
        list.childNodes[suggestionIndex].classList.add('active')
        searchInput.value = list.childNodes[suggestionIndex].textContent;
   }
});
