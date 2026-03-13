let input = document.getElementById('input');
let btn = document.getElementById('btn');
let message = document.getElementById('message')

let word = 'javascript';
let attempts = 0;

btn.addEventListener('click', () =>{
    let usertext = input.value;

    if(usertext === word){
        message.innerHTML = "Access Granted ✅";
        attempts = 0
    }else{
        attempts++;
        message.innerHTML = `Try Again ❌ ${usertext}`;

        if(attempts >= 3){
            Lock()
        }

         input.value = "";
    }
})

function Lock(){
    btn.disabled = true;
    input.disabled = true;
    message.innerHTML = ` Wait 3 seconds...`;

    setTimeout(() => {
        btn.disabled = false;
        input.disabled = false;
        message.innerHTML = 'Try again';
        attempts = 0
    },3000)
}