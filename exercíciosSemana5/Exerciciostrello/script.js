document.addEventListener("DOMContentLoaded", function() {
    const resposta = document.getElementById('valor');

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

    
    document.getElementById('consulta').addEventListener('click', consultarPreco);
});