let input = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('input', () => {
    let text = input.value;

    output.innerHTML = text
})