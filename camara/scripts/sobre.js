import { atracoes } from "../dados/atracoes.mjs";

const gradeAtracoes = document.querySelector("#grade-atracoes");

const mensagemVisita = document.querySelector("#mensagem-visita");

const agora = Date.now();
const ultimaVisita = localStorage.getItem("ultimaVisitaSobre");
const umDia = 24 * 60 * 60 * 1000;



if (!ultimaVisita) {
    mensagemVisita.textContent =
        "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";
} else {
    const diferenca = agora - Number(ultimaVisita);

    
if (diferenca < umDia) {
    mensagemVisita.textContent = "Já voltou? Que legal!";
} else {
    const dias = Math.floor(diferenca / umDia);

    if (dias === 1) {
        mensagemVisita.textContent =
            "Sua última visita foi há 1 dia.";
    } else {
        mensagemVisita.textContent =
            `Sua última visita foi há ${dias} dias.`;
    }
}
}


localStorage.setItem("ultimaVisitaSobre", String(agora));


atracoes.forEach((atracao) => {
    const cartao = document.createElement("article");
    cartao.classList.add("cartao-atracao");

    const titulo = document.createElement("h2");
    titulo.textContent = atracao.nome;

    const figura = document.createElement("figure");

    const imagem = document.createElement("img");
    imagem.src = atracao.imagem;
    imagem.alt = atracao.nome;
    imagem.width = 300;
    imagem.height = 200;
    imagem.loading = "lazy";

    figura.appendChild(imagem);

    const endereco = document.createElement("address");
    endereco.textContent = atracao.endereco;

    const descricao = document.createElement("p");
    descricao.textContent = atracao.descricao;

    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = "Saiba mais";

    
botao.addEventListener("click", () => {
    const pesquisa = encodeURIComponent(
        `${atracao.nome} João Pessoa Paraíba`
    );

    window.open(
        `https://www.google.com/search?q=${pesquisa}`,
        "_blank",
        "noopener,noreferrer"
    );
});

    cartao.appendChild(titulo);
    cartao.appendChild(figura);
    cartao.appendChild(endereco);
    cartao.appendChild(descricao);
    cartao.appendChild(botao);
    gradeAtracoes.appendChild(cartao);
});