let btn = document.getElementById('btn');
let list = document.getElementById('list');

let count = 0;

btn.addEventListener('click', () => {
    count++;

    let li = document.createElement('li');
    li.innerHTML = `Click ${count}`;


    list.appendChild(li)
})