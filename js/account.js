var isLogged = false;
var accounts = [];

function validateLogin() {
    var email = document.getElementById("email");
    var password = document.getElementById("senha");

    if(email != "" && password != "")
        isLogged = true;
        location.href = "index.html";
}

function register() {
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    const newUser = {
        nome,
        cpf,
        email,
        senha
    }

    const checkExistingCPF = accounts.find(a => a.cpf == cpf)

    if(checkExistingCPF) {
        alert("CPF já cadastrado!");
    } else {
        accounts.push(newUser);
        console.log(accounts)
    }
}
