var value = document.getElementsByClassName("selected-qtd");
var products = [];
var isCartOpen = false;

function add(id) {
    value[id].innerText++;
}

function remove(id) {
    if(value[id].innerText > 1) {
        value[id].innerText--;
    }
}

function addProductToCart(id, name) {
    const val = Number(value[id].innerHTML);

    if(products.length > 0) { 
        
        var index = products.findIndex(p => p.id == id);

        if(index != -1) {
            var thisQtd = products[index].qtd;

            products[index] = { 
                id, 
                name, 
                qtd: thisQtd + val 
            }
        } else 
            products.push({ id, name, qtd: val });
    } else
        products.push({ id, name, qtd: val });

    value[id].innerHTML = 1;
    renderProducts();
}

function toggleCart() {
    var cart = document.getElementById("carrinho");

    isCartOpen = !isCartOpen;
    if(isCartOpen) {
        cart.style.display = "block";
        renderProducts();
    } else {
        cart.style.display = "none";
    }
}

function removeFromCart(id) {
    var updatedProducts = products.filter(p => p.id != id);
    products = updatedProducts;
    renderProducts();
}

function renderProducts() {
    var cartContent = document.getElementById("carrinho-content");
    cartContent.innerHTML = "";

    if(products.length > 0) {
        products.forEach(p => {
            cartContent.innerHTML += `
                <div class="carrinho-produto">
                    <div>
                        <p>ID: ${p.id},</p>
                        <p>Nome: ${p.name}, </p>
                        <p>Quantidade: ${p.qtd}</p>
                    </div>
                    <button onclick='removeFromCart(${p.id})'>Delete</button>
                </div>
            `;
        })
    } else {
        cartContent.innerHTML = "Seu carrinho está vazio!"
    }
}