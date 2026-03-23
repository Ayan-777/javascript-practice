let btn = document.getElementById('btn');
let message = document.getElementById('message');

btn.addEventListener('click', async() => {
    message.textContent = '';
    message.textContent = 'Loading.....';

    try {
        let result = await request();
        window.open(result, '_self')
        message.textContent = 'Opening page....';
    } catch (error) {
        message.textContent = error;
    }

    
})

function request(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            let suc = Math.random () < 0.4;

            if(suc){
                res('https://alexwohlbruck.github.io/cat-facts/')
            }else{
                rej ('Something went wrong ❌')
            }
        },2000)
    })
}