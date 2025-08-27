const data = [
    {
        id:1,
        title: "step 1",
        desc: "Lorem ipsum dolor t amet consectetur, adipisicing elit.Alias maxime ratione in animi facere dolore explicab test",
    },
    {
        id:2,
        title: "step 2",
        desc: "Lorem ipsum dolor t amet consectetur, adipisicing elit.Alias maxime ratione in animi facere dolore explicab",
    },
    {
        id:3,
        title: "step 3",
        desc: "Lorem ipsum dolor t amet consectetur, adipisicing elit.Alias maxime ratione in animi facere dolore explicab",
    },
    {
        id:4,
        title: "step 4",
        desc: "Lorem ipsum dolor t amet consectetur, adipisicing elit.Alias maxime ratione in animi facere dolore explicab",
    },
    {
        id:5,
        title: "step 5",
        desc: "Lorem ipsum dolor t amet consectetur, adipisicing elit.Alias maxime ratione in animi facere dolore explicab",
    },
    {
        id:6,
        title: "step 6",
        desc: "Lorem ipsum dolor t amet consectetur, adipisicing elit.Alias maxime ratione in animi facere dolore explicab",
    },
]
const accordion = document.querySelector('.accordion');
const accordionFlag = document.querySelector('#accordion-flag');
const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`;

const getAccordionItem = (item) => {
    return ` <div class="acc-item">
        <div class="item-title" id="${item.id}">
         <div>${item.title}</div>
         <div class="arrow">${arrowIcon}</div>
        </div >
         <div class="item-desc">${item.desc}</div>
       </div>`;
}

function showAccordion() {
    const accordionItems = data.map(item => getAccordionItem(item)).join('');
    accordion.innerHTML = accordionItems;

    const items = document.querySelectorAll('.acc-item');
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            const currItemDesc = item.querySelector('.item-desc');
            const isActive = currItemDesc.classList.contains('active');
            const currItemArrow = item.querySelector('.arrow');
            if (accordionFlag.checked) {
                items.forEach(item => {
                    item.querySelector('.item-desc').classList.remove('active');
                    item.querySelector('.arrow').classList.remove('rotate-arrow');
                })
                
            }
            if (isActive) {
                currItemDesc.classList.remove('active');
                currItemArrow.classList.remove('rotate-arrow')
            } else {
                currItemDesc.classList.add('active');
                currItemArrow.classList.add('rotate-arrow')
            }
        })
    })
}



showAccordion();
