let Searchbox = document.getElementById("Searchbox");
let Searchbtn = document.getElementById("Searchbtn");
let items = document.getElementById("items");
let message = document.getElementById("message");

function filteritems() {
  let text = Searchbox.value.toLowerCase();
  let listItems = items.children;


for(let i = 0; i < listItems.length; i++){
    let listtext = listItems[i].textContent.toLowerCase();

    listItems[i].style.display = listtext.includes(text) ? "block" : 'none';
}

}

Searchbox.addEventListener("input", filteritems);
Searchbtn.addEventListener("click", filteritems);

