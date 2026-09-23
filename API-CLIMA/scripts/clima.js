// selecione os elementos HTML no documento
const tempAtual = document.querySelector('#temp-atual');
const iconeDoClima = document.querySelector('#icone-do-clima');
const descrDaLegenda = document.querySelector('figcaption');
const mlang = 'pt_br';

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=f0f6380dc177069d44cf05a735aa20f2';

async function apiFetch() {
    try {
        const resposta = await fetch(url);

        if (resposta.ok) {
            const dados = await resposta.json();
            mostrarResultados(dados);
        } else {
            throw Error(await resposta.text());
        }
    } catch (erro) {
        console.log(erro);
    }
}

apiFetch();

function mostrarResultados(dados) {
    tempAtual.innerHTML = `${dados.main.temp}&deg;C`;

    const iconesrc = `https://openweathermap.org/img/w/${dados.weather[0].icon}.png`;

    let descr = dados.weather[0].description;

    iconeDoClima.setAttribute('src', iconesrc);
    iconeDoClima.setAttribute('alt', descr);

    descrDaLegenda.textContent = `${descr}`;
}