let btn = document.getElementById('showbtn');
let message = document.getElementById('message');
let list = document.getElementById('list');

const foods = ["Pizza", "Sushi", "Tacos", "Pasta"];


btn.addEventListener('click',() => {
    message.textContent = 'Loading...';
    list.innerHTML = '';
    btn.disabled = true
    setTimeout(() => {
        message.textContent = 'Here are your items:';
        btn.disabled = false

        for(let i of foods){
            let li = document.createElement('li');
            li.textContent = i;
            list.appendChild(li);
        }
    },2000)
})
