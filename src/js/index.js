/*
    OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - Dar um jeito de pegar o elemento do HTML dos botões.

    - passo 2 - Dar um jeito de identificar o clique do usuário no botão.
    
    - passo 3 - Desmarcar o botão selecionado anterior.

    - passo 4 - Marcar o botão clicado como se estivesse selecionado.

    - passo 5 - Esconder a imagem anteiror.

    - passo 6 - Fazer aparecer a imagem correspondente ao botão clicado.
*/

//  - passo 1 - Dar um jeito de pegar o elemento do HTML dos botões.
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//  - passo 2 - Dar um jeito de identificar o clique do usuário no botão.
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //  - passo 3 - Desmarcar o botão selecionado anterior.
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //  - passo 4 - Marcar o botão clicado como se estivesse selecionado.
        botao.classList.add('selecionado');

        //  - passo 5 - Esconder a imagem atual.
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //  - passo 6 - Fazer aparecer a imagem correspondente ao botão clicado.
        imagens[indice].classList.add('ativa');
    })
})