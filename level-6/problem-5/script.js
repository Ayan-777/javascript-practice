let input = document.getElementById('input');


let save = localStorage.getItem('input')
if (save) {
    input.value = save;
}
input.addEventListener('input',() => {
    let text = input.value;
    localStorage.setItem('input', text)
})


if (input.value === '') {
    localStorage.removeItem('input');
}