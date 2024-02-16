/* Exercício 1 - Função de mensagem */

console.log ("o carro é preto");


/* Exercício 2 - Atribuição de valores */

let valor = parseFloat (widow.prompt("Digite um número"));
console.log(valor);


/* Exercício 3 - Concatenação */
let primeira = "Sarah";
let segunda = "Frainer";
let combinação = primeira + segunda;

console.log (combinação);

/* Exercício 4 - Função com parâmetros */

let num1 = 8;
let num2 = 5;

function soma (num1, num2){
    return num1 + num2
}

 console.log (soma);


 /* Exercício 5 - Estruturas condicionais */
let novoNumero = parseFloat (prompt("Digite um número"));

if (novoNumero > 0) {
    console.log ("O número é positivo");
}
else if (novoNumero < 0){
    console.log ("O número é negativo");
}
else {
    console.log ("O número é zero");
}

 /* Exercício 6 - Objetos */
 let pessoa1 = new Object ();
pessoa1.nome = "Ana";
pessoa1.idade = "20";
pessoa1.nacionalidade = "brasileira";
pessoa1.profissão = "cabelereira";

console.log (pessoa1);

let pessoa2 = new Object ();
pessoa2.nome = "João";
pessoa2.idade = "18";
pessoa2.nacionalidade = "português";
pessoa2.profissão = "vendedor";

console.log (pessoa2);

let pessoa3 = new Object ();
pessoa3.nome = "Luana";
pessoa3.idade = "40";
pessoa3.nacionalidade = "caribenha";
pessoa3.profissão = "empresária";

console.log (pessoa3);

 /* Exercício 7 - Função cumprimentos */

 let horario = parseFloat (prompt("Digite o horário, utilizando a vírgula para separar a hora e os minutos."))

function funcaoHorario (horario){
    if (horario < 12) {
        return "Bom dia!"
    }
    else if (horario < 18) {
        return "Boa tarde!";
    }
    else {
        return "Boa noite!";
    }
}

console.log (funcaoHorario(horario));


/* Exercício 8 - Função par/ímpar */

let numeroRecebido = parseFloat (prompt ("Digite um número"));

function parOuImpar (numeroRecebido){
    if (numeroRecebido % 2 === 0) {
        return "Número Par!"
    }
    else {
        return "Número Ímpar!"
    }
}

console.log (parOuImpar(numeroRecebido));


/* Exercício 8 - Função par/ímpar 
Use um switch para exibir mensagens diferentes com base em uma condição. */

let condicao = parseFloat (prompt("Digite a hora da manhã"));

switch (condicao){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
console.log ("Ainda é madrugada.");
break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
console.log ("O sol já nasceu, é de manhã.")
}

/* Exercício 9 - Solicitação de dados em função
Crie uma função que solicite para o usuário através do prompt de comando sua idade,
 e a partir da idade fornecida, exiba uma mensagem informando se ele é maior de idade ou não. 
 Considere 18 anos como maior idade. */

 let idade = parseInt (prompt("Digite a sua idade."));

 function maioridade (idade){
    if (idade < 18) {
        return "O indivíduo é menor de idade";
    }
    else {
        return "O indivíduo é maior de idade";
    }
 }
 console.log (maioridade(idade));