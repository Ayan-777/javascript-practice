let button = document.getElementById("button");
let countel = document.getElementById("count");
let message = document.getElementById("message")

let count = 0
button.addEventListener('click', () => {
    button.style.color = "yellow"
    console.log("click");
    
    count++
    countel.innerHTML = count;

    if(count === 5){
        message.innerHTML = '😍 good going 😍'
        button.style.color = "blue"
    }else if(count === 10){
        message.innerHTML = '🥳 Excellent! 🥳'
        button.style.color = "grey"
    }else if(count === 20){
        message.innerHTML = '😵 Limit Reached Stop! 😵'
        button.style.color = "red"
        button.disabled = true
    }

})

