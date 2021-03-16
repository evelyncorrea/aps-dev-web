var value = document.getElementsByClassName("selected-qtd");

function add() {
    value[0].innerText++;
}

function remove() {
    if(value[0].innerText > 1) {
        value[0].innerText--;
    }
}

function addProduct() {
    alert("Quantidade adicionada: " + value[0].innerHTML);
    value[0].innerHTML = 1;
}