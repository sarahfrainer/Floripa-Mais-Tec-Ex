document.addEventListener("DOMContentLoaded", function () {
    const resposta = document.getElementById('valor');
    let carrinho = [];
    const carrinhoContainer = document.getElementById('carrinho-container');
    const paragrafoTotal = document.createElement('p');
    carrinhoContainer.appendChild(paragrafoTotal); 

    function consultarPreco() {
        const resposta2 = resposta.value.toLowerCase();
        const resposta3 = precos(resposta2);
        alert("O preço do produto é: " + resposta3);
    }

    function precos(resposta2) {
        switch (resposta2) {
            case 'banana':
            case '1':
                return 'R$1,99';

            case 'mirtilo':
            case '2':
                return 'R$10,50';

            case 'morango':
            case '3':
                return 'R$4,99';

            default:
                return 'Produto não cadastrado';
        }
    }

    function adicionarCarrinho() {
        const resposta4 = resposta.value.toLowerCase();
        const prodArray = valCarrinho(resposta4);
        carrinho.push(prodArray);
        console.log(carrinho);

        let total = 0;
        carrinho.forEach(item => {
            const preço = parseFloat(item.preço.replace('R$', '').replace(',', '.'));
            total += preço;
        });

        paragrafoTotal.textContent = "O valor da compra é: R$" + total.toFixed(2);
    }

    function valCarrinho(resposta4) {
        switch (resposta4) {
            case 'banana':
            case '1':
                return { nome: 'banana', preço: 'R$1,99' };

            case 'mirtilo':
            case '2':
                return { nome: 'mirtilo', preço: 'R$10,50' };

            case 'morango':
            case '3':
                return { nome: 'morango', preço: 'R$4,99' };

            default:
                return 'Produto não cadastrado';
        }
    }

    document.getElementById('consulta').addEventListener('click', consultarPreco);
    document.getElementById('compra').addEventListener('click', adicionarCarrinho);
});