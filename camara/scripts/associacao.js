  const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

const botaoMenu = document.querySelector("#botao-menu");
const navegacao = document.querySelector("#navegacao");

if (botaoMenu && navegacao) {
    botaoMenu.addEventListener("click", () => {
        navegacao.classList.toggle("aberto");

        if (navegacao.classList.contains("aberto")) {
            botaoMenu.textContent = "✕";
            botaoMenu.setAttribute("aria-label", "Fechar menu");
        } else {
            botaoMenu.textContent = "☰";
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        }
    });
}

const linksModal = document.querySelectorAll(".link-modal");
const botoesFechar = document.querySelectorAll(".fechar-modal");

linksModal.forEach((link) => {
    link.addEventListener("click", (evento) => {
        evento.preventDefault();

        const idModal = link.dataset.modal;
        const modal = document.getElementById(idModal);

        if (modal) {
            modal.showModal();
        }
    });
});

botoesFechar.forEach((botao) => {
    botao.addEventListener("click", () => {
        const modal = botao.closest("dialog");

        if (modal) {
            modal.close();
        }
    });
});

const ano = document.querySelector("#ano");
const ultimaModificacao = document.querySelector("#ultima-modificacao");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

if (ultimaModificacao) {
    ultimaModificacao.textContent = document.lastModified;
}