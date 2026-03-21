let input = document.getElementById('input');
let savebtn = document.getElementById('savebtn');
let list = document.getElementById('list');
let message = document.getElementById('message');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach((text) => {
    createnote(text)
});

savebtn.addEventListener('click', () => {
    let text = input.value;
    if(tasks.length === 0){
        message.textContent = 'No notes yet'
    }
    if(text.trim() === ''){
        message.innerHTML = 'Please write something first'
        return;
    }

    tasks.push(text)
    localStorage.setItem('tasks', JSON.stringify(tasks));


    createnote(text)

    input.value = '';
})


function createnote(text){
    message.innerHTML = 'List of yours notes';
    let task = document.createElement('div');
    task.classList.add('text')

    let span = document.createElement('span');
    span.innerHTML = text

    let deletbtn = document.createElement('button');
    deletbtn.innerHTML = 'delete'

    deletbtn.addEventListener('click', () => {
        task.remove();

         tasks = tasks.filter((x) => x !== text);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })


    list.appendChild(task);
    task.appendChild(span);
    task.appendChild(deletbtn);
}
