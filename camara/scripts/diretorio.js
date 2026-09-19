const membrosContainer = document.querySelector("#membros");
const botaoGrade = document.querySelector("#botao-grade");
const botaoLista = document.querySelector("#botao-lista");

async function carregarMembros() {
    const resposta = await fetch("dados/membros.json");
    const membros = await resposta.json();
    exibirMembros(membros);
}

function nivelAssociacao(nivel) {
    if (nivel === 3) return "🥇 Ouro";
    if (nivel === 2) return "🥈 Prata";
    return "⭐ Membro";
}

function exibirMembros(membros) {
    membrosContainer.innerHTML = "";

    membros.forEach((membro) => {
        const card = document.createElement("article");
        card.classList.add("cartao");

        card.innerHTML = `
            <img src="imagens/camara_imagens/empresas/${membro.image}" alt="${membro.name}">
            <h3>${membro.name}</h3>
            <p><strong>${nivelAssociacao(membro.membership)}</strong></p>
            <p>${membro.address}</p>
            <p>${membro.phone}</p>
            <a href="${membro.website}" target="_blank" rel="noopener noreferrer">Visitar site</a>
        `;

        membrosContainer.appendChild(card);
    });
}

botaoGrade.addEventListener("click", () => {
    membrosContainer.classList.add("grade");
    membrosContainer.classList.remove("lista");

    botaoGrade.classList.add("ativo");
    botaoLista.classList.remove("ativo");
});

botaoLista.addEventListener("click", () => {
    membrosContainer.classList.add("lista");
    membrosContainer.classList.remove("grade");

    botaoLista.classList.add("ativo");
    botaoGrade.classList.remove("ativo");
});

document.querySelector("#ano").textContent = new Date().getFullYear();

document.querySelector("#ultima-modificacao").textContent = document.lastModified;

carregarMembros();