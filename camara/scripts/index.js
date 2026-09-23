const temperaturaAtual = document.querySelector("#temperatura-atual");

const botaoMenu = document.querySelector("#botao-menu");
const navegacao = document.querySelector("#navegacao");

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

const descricaoClima = document.querySelector("#descricao-clima");

const dia1 = document.querySelector("#dia-1");
const dia2 = document.querySelector("#dia-2");
const dia3 = document.querySelector("#dia-3");

const temp1 = document.querySelector("#temp-1");
const temp2 = document.querySelector("#temp-2");
const temp3 = document.querySelector("#temp-3");

const membrosDestaque = document.querySelector("#membros-destaque");


const url = "https://api.openweathermap.org/data/2.5/weather?lat=-7.1195&lon=-34.845&units=metric&lang=pt_br&appid=4a1c56509f2a5e45e66799ae3ac6cf80";

const urlPrevisao = "https://api.openweathermap.org/data/2.5/forecast?lat=-7.1195&lon=-34.845&units=metric&lang=pt_br&appid=4a1c56509f2a5e45e66799ae3ac6cf80";


async function apiFetch() {
    try {
        const resposta = await fetch(url);

        if (resposta.ok) {
            const dados = await resposta.json();

            temperaturaAtual.innerHTML =
                `${dados.main.temp}&deg;C`;

            descricaoClima.textContent =
                dados.weather[0].description;
        } else {
            throw Error(await resposta.text());
        }

    } catch (erro) {
        console.log(erro);
    }
}

async function buscarPrevisao() {
    try {
        const resposta = await fetch(urlPrevisao);

        if (resposta.ok) {
            const dados = await resposta.json();

            mostrarPrevisao(dados.list);
        } else {
            throw Error(await resposta.text());
        }

    } catch (erro) {
        console.log(erro);
    }
}


function mostrarPrevisao(lista) {

    const hoje = new Date();

    const hojeString =
        hoje.toISOString().split("T")[0];

    const datas = [];

    lista.forEach(previsao => {

        const data =
            previsao.dt_txt.split(" ")[0];

        if (
            data !== hojeString &&
            !datas.includes(data)
        ) {
            datas.push(data);
        }
    });

    const proximosDias =
        datas.slice(0, 3);


    proximosDias.forEach((data, indice) => {

        const previsoesDoDia =
            lista.filter(previsao =>
                previsao.dt_txt.startsWith(data)
            );


        const previsaoEscolhida =
            previsoesDoDia.reduce(
                (maisProxima, previsao) => {

                    const horario =
                        previsao.dt_txt.split(" ")[1];

                    const diferencaAtual =
                        Math.abs(
                            parseInt(
                                horario.substring(0, 2)
                            ) - 12
                        );


                    const horarioAnterior =
                        maisProxima.dt_txt.split(" ")[1];

                    const diferencaAnterior =
                        Math.abs(
                            parseInt(
                                horarioAnterior.substring(0, 2)
                            ) - 12
                        );


                    return diferencaAtual <
                        diferencaAnterior
                        ? previsao
                        : maisProxima;
                }
            );


        const dataFormatada =
            new Date(`${data}T12:00:00`);


        const nomeDia =
            new Intl.DateTimeFormat("pt-BR", {
                weekday: "long"
            }).format(dataFormatada);


        const nomeDiaFormatado =
            nomeDia.charAt(0).toUpperCase() +
            nomeDia.slice(1);


        if (indice === 0) {

            dia1.textContent =
                nomeDiaFormatado;

            temp1.innerHTML =
                `${previsaoEscolhida.main.temp}&deg;C`;
        }


        if (indice === 1) {

            dia2.textContent =
                nomeDiaFormatado;

            temp2.innerHTML =
                `${previsaoEscolhida.main.temp}&deg;C`;
        }


        if (indice === 2) {

            dia3.textContent =
                nomeDiaFormatado;

            temp3.innerHTML =
                `${previsaoEscolhida.main.temp}&deg;C`;
        }

    });
}

async function carregarDestaques() {

    try {

        const resposta =
            await fetch("dados/membros.json");


        if (!resposta.ok) {
            throw new Error(
                "Erro ao carregar membros.json"
            );
        }


        const membros =
            await resposta.json();


        // Somente membros Ouro e Prata
        const membrosElegiveis =
            membros.filter(
                membro =>
                    membro.membership === 2 ||
                    membro.membership === 3
            );


        // Embaralha os membros
        membrosElegiveis.sort(
            () => Math.random() - 0.5
        );


        // Seleciona 3 membros aleatoriamente
        const selecionados =
            membrosElegiveis.slice(0, 3);


        mostrarDestaques(selecionados);

    } catch (erro) {

        console.error(
            "Erro ao carregar os destaques:",
            erro
        );
    }
}


function mostrarDestaques(membros) {

    membrosDestaque.innerHTML = "";


    membros.forEach(membro => {

        const card =
            document.createElement("article");


        card.classList.add(
            "cartao-destaque"
        );


        card.innerHTML = `
            <img
                src="imagens/camara_imagens/empresas/${membro.image}"
                alt="Logo da empresa ${membro.name}"
            >

            <h3>${membro.name}</h3>

            <p>
                <strong>
                    ${nivelAssociacao(membro.membership)}
                </strong>
            </p>

            <p>${membro.address}</p>

            <p>${membro.phone}</p>

            <a
                href="${membro.website}"
                target="_blank"
                rel="noopener noreferrer">
                Visitar site
            </a>
        `;


        membrosDestaque.appendChild(card);

    });
}


function nivelAssociacao(nivel) {

    if (nivel === 3) {
        return "🥇 Ouro";
    }

    if (nivel === 2) {
        return "🥈 Prata";
    }

    return "⭐ Membro";
}


document.querySelector("#ano").textContent =
    new Date().getFullYear();

document.querySelector("#ultima-modificacao").textContent =
    document.lastModified;


apiFetch();

buscarPrevisao();

carregarDestaques();