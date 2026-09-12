const botaoDeNav = document.querySelector('#ham-btn');
const barraNavegacao = document.querySelector('#barra-navegacao');

botaoDeNav.setAttribute('aria-expanded', 'false');

botaoDeNav.addEventListener('click', () => {
    botaoDeNav.classList.toggle('show');
    barraNavegacao.classList.toggle('show');

    const menuAberto = barraNavegacao.classList.contains('show');

    botaoDeNav.setAttribute('aria-expanded', menuAberto);

    botaoDeNav.setAttribute(
        'aria-label',
        menuAberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
});