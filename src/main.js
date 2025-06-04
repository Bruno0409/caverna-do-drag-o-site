document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;

            // 1. Esconde todas as abas
            escondeTodasAbas();

            // 2. Remove classe ativa de todos os botões
            removeBotaoAtivo();

            // 3. Mostra aba clicada
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            aba.classList.add('shows__list--is-active');

            // 4. Adiciona classe ativa ao botão clicado
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }
});

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}
