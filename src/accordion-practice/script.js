const data = [
    {
        id:1,
        title: "step 1",
        desc: "Lorem ipsum dolor t amet consectetur, adipisicing elit.Alias maxime ratione in animi facere dolore explicab",
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
function init() {
    let steps = '';
    data.forEach(item => {
        steps += ` <div class="step-wrapper">
        <div class="step" id="${item.id}">
         <div>${item.title}</div>
        <button>icon</button>
        </div >
         <div class="step-desc">${item.desc}</div>
       </div>`;
    });
    accordion.innerHTML = steps;

    
const step = document.querySelectorAll('.step');

    step.forEach(item => {
        item.addEventListener('click', (e) => {
        const currentStep = document.getElementById(`${e.target.id}`)
            currentStep.classList.add('active');
            console.log(currentStep)
    })
})

}



init();