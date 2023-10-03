// OBJETIVO 1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado

// Passo 1.1 - Pegar os botões no Js para poder verificar quando o usuário clicar encima de um deles

const botoes = document.querySelectorAll(".botao");

// OBJETIVO 2 - Quando clicar no botão do personagem mostrar as informações do personagem

// Passo 2.1 - Pegar os personagens no Js para poder mostrar ou esconder ele

const personagens = document.querySelectorAll(".personagem");



botoes.forEach((botao, indice)=> {
    botao.addEventListener("click", () => {

// Passo 1.3 - Verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        desselecionarBotao();
// Passo 2.3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        desselecionarPersonagem();

// Passo 1.2 - adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado");
// Passo 2.2 - Adicionar a classe "selecioado" no personagem que o usuário selecionou
        personagens[indice].classList.add("selecionado");

    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

