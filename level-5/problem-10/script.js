let btn = document.getElementById('btn');
let message = document.getElementById('message');


let last = 0;

btn.addEventListener('click', () => {
    let current = Date.now();
    let differnt = current - last;

    if(differnt < 500){
        message.innerHTML = 'Double Click'
    }else{
        message.innerHTML = 'Single Click'
    }
    
    last = current
})