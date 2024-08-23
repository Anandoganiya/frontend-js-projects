const hour = document.querySelector('input[name="hour"]');
const min = document.querySelector('input[name="min"]');
const sec = document.querySelector('input[name="sec"]');

const startBtn = document.querySelector('#start');

let hourNum = 0;
let minNum = 0;
let secNum = 0;
hour.addEventListener("change", (e) => {
    hourNum = parseInt(e.currentTarget.value);
})
min.addEventListener("change", (e) => {
    minNum = parseInt(e.currentTarget.value);
})
sec.addEventListener("change", (e) => {
    secNum = parseInt(e.currentTarget.value);
})


startBtn.addEventListener('click', (e) => {
    const interval = setInterval(() => {
        if (secNum > 0) {
            sec.value = --secNum;
        } else if (minNum > 0) {
            min.value = --minNum;
            secNum = 59; 
            sec.value = secNum;
        } else if (hourNum > 0) {
            hour.value = --hourNum;
            minNum = 59; 
            min.value = minNum;
            secNum = 59; 
            sec.value = secNum;
        } else {
            clearInterval(interval); 
        }
    }, 100); 
});
