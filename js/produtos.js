var value = document.getElementsByClassName("selected-qtd");

function add(id) {
    value[id].innerText++;
}

function remove(id) {
    if(value[id].innerText > 1) {
        value[id].innerText--;
    }
}

function addProductToCart(id) {
    alert("Quantidade adicionada: " + value[id].innerHTML);
    value[id].innerHTML = 1;
}