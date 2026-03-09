let input = document.getElementById('input');
let message = document.getElementById('message');

let maxchar = 100;

input.addEventListener('input', () => {
    let current = input.value.length;

    let remaining  = maxchar - current;

    if(remaining > 0){
        message.innerHTML = `Remaining: ${remaining}`;
    }else{
        message.innerHTML = "Limit reached!";


        if(input.value.length > maxchar){
            input.value = input.value.substring(0, maxchar)
        }
    }
})