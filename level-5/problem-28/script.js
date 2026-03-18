let input = document.getElementById('input');
let submit = document.getElementById('addbtn');
let list = document.getElementById('list');

submit.addEventListener('click', () => {
    let text = input.value;

    if(text === "") return; // prevent empty

    let task = document.createElement('div');
    task.classList.add('task');

    let span = document.createElement('span');
    span.innerHTML = text;

    let delebtn = document.createElement('button');
    delebtn.innerHTML = 'Delete';

    delebtn.addEventListener('click', () => {
        task.remove();
    });

    span.addEventListener('click', () => {
        span.classList.toggle('line-through')
    });

    list.appendChild(task);
    task.appendChild(span);
    task.appendChild(delebtn);

    input.value = '';
});