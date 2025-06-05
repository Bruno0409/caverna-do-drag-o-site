document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        console.log(window.scrollY);
    })

        if (posicaoAtual < alturaHero) {
            console.log("ocultar os elementos")
        }
    

            // Seção de atrações, programas das abas

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
        
            escondeTodasAbas();
        
            removeBotaoAtivo();
            
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            aba.classList.add('shows__list--is-active');

            // 4. Adiciona classe ativa ao botão clicado
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }

     // Seção FAQ, accordion

    for (let i = 0; i < buttons.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta)
        }
})

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
    
}

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
