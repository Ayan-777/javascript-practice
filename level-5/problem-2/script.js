let button = document.getElementById("button");
let isOn = false;
button.addEventListener("click", () => {
    isOn = !isOn
    button.innerText = isOn? 'ON':'OFF';
    button.style.color = isOn? 'green' : 'red'
});
