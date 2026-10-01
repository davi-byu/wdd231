const parametros = new URLSearchParams(window.location.search);

const nome = parametros.get("primeiro-nome");
const sobrenome = parametros.get("sobrenome");
const email = parametros.get("email");
const telefone = parametros.get("telefone");
const organizacao = parametros.get("organizacao");
const timestamp = parametros.get("timestamp");

document.querySelector("#nome").textContent = nome;
document.querySelector("#sobrenome").textContent = sobrenome;
document.querySelector("#email").textContent = email;
document.querySelector("#telefone").textContent = telefone;
document.querySelector("#organizacao").textContent = organizacao;

if (timestamp) {
    const data = new Date(timestamp);

    document.querySelector("#timestamp").textContent =
        data.toLocaleString("pt-BR");
}

