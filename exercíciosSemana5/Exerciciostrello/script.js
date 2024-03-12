document.addEventListener("DOMContentLoaded", function () {
    const resposta = document.getElementById('valor');
    let carrinho = [];

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

    function consultarValor() {
        let total = 0;
        if (carrinho.length > 0) {
        carrinho.forEach(item => {
            const preço = parseFloat(item.preço.replace('R$', '').replace(',', '.'));
            total += preço;
        });
        alert("O total da compra é: R$" + total.toFixed(2));
    }
        else {
        alert ("O carrinho está vazio!")
        }
    }

    document.getElementById('consulta').addEventListener('click', consultarPreco);
    document.getElementById('compra').addEventListener('click', adicionarCarrinho);
    document.getElementById('valorCompra').addEventListener('click', consultarValor);
});