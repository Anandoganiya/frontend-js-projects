const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')

let countDownTimer = null;

startBtn.addEventListener('click', e => {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;
    
    countDownTimer = setInterval(() =>
    timer()
    , 1000)
})

function timer() {
    // format the time
    if (sec.value > 60) {
        min.value++;
        sec.value = parseInt(sec.value) - 59;
    }
    if (min.value > 60) {
        hour.value++;
        min.value = parseInt(min.value) - 60;
    }
    min.value = min.value > 60 ? 60 : min.value;
    
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
        hour.value = ""
        min.value = ""
        sec.value = ""
        return;
    } else if (sec.value != 0) {
        sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0) {
        sec.value = 59;
        min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    }
    else if (hour.value != 0) {
        min.value = 60;
        hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
}

stopBtn.addEventListener('click', e => {
    clearInterval(countDownTimer);
})

resetBtn.addEventListener('click', e => {
    hour.value = "";
    sec.value = "";
    min.value = "";
    clearInterval(countDownTimer);
})