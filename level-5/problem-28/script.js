let input = document.getElementById('input');
let submit = document.getElementById('addbtn');
let list = document.getElementById('list');

submit.addEventListener('click', () => {
    let text = input.value;

    let li = document.createElement('li');
    li.innerHTML = text

    let delbtn = document.createElement('button');
    delbtn.innerHTML = 'delete'

    delbtn.addEventListener('click', () => {
        li.remove()
    })

    list.appendChild(li)
    li.appendChild(delbtn)
})

