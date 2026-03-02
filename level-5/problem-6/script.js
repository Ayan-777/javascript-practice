let modebt = document.getElementById('mode');
let countEl = document.getElementById('count');
let plusbt = document.getElementById('plus');
let minusbt = document.getElementById('minus');
let message = document.getElementById('message')

let isDouble = false
let count = 0;

modebt.addEventListener('click', () => {
    message.innerHTML = ''
    isDouble = !isDouble
    modebt.innerHTML = isDouble ? 'Double Mode' : 'Normal Mode';
})
plusbt.addEventListener('click', () => {
    message.innerHTML = ''
    count += isDouble ? 2: 1
    countEl.innerHTML = count
})

minusbt.addEventListener('click', () => {

    let step = isDouble? 2 : 1;

    if(count - step >= 0){
        count -= step
        countEl.innerHTML = count
    }else{
        message.innerHTML = 'Sorry, you cannot go below 0'
    }
})