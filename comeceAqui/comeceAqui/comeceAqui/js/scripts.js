const local = window.location.search;
console.log(local);

const info = new URLSearchParams(window.location.search);
console.log(info);

console.log(info.get('primeiro'));
console.log(info.get('sobrenome'));
console.log(info.get('ordenancas'));
console.log(info.get('data'));
console.log(info.get('local'));
console.log(info.get('celular'));
console.log(info.get('email'));

document.querySelector('#resultados').innerHTML = `
    <p>Agendamento para ${info.get('primeiro')} ${info.get('sobrenome')}</p>
    <p>Ordenança: ${info.get('ordenancas')} em ${info.get('data')} no templo ${info.get('local')}</p>
    <p>Seu telefone: ${info.get('celular')}</p>
    <p>Seu email é ${info.get('email')}</p>
`;