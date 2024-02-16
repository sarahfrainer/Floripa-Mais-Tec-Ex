/*
1. Escreva um programa que receba a idade de uma pessoa e imprima se ela é maior de idade ou menor de idade.
 
2. Crie um programa que classifique um número como positivo, negativo ou zero.
 
3. Faça um programa que determine se um ano é bissexto ou não.
 
4. Crie um programa que verifique se um número é par ou ímpar.
 
5. Escreva um programa que determine se um aluno foi aprovado, reprovado ou está em recuperação, considerando que a nota mínima para aprovação é 7, e para recuperação é 5.
 
6. Faça um programa que determine o maior de três números informados.
 
7. Crie um programa que verifique se um ano é par ou ímpar.
*/

/*If/else */

let idade = parseInt (prompt ("Digite a sua idade:"))
    if (idade >= 18) {
        console.log ("Você é maior de idade!");
    } 
    else {
        console.log ("Você é menor de idade!");
    }


    let numero = parseFloat (prompt ("Digite um número"))
    if (numero > 0) {
        console.log ("O número é positivo.");
    }
    else if (numero < 0) {
        console.log ("O número é negativo");
    }
    else {
        console.log ("O número é zero.");
    }



    let ano = parseInt (prompt("Digite um ano"))
    if (ano % 4 == 0) {
        console.log ("O ano é bissexto");
    }
    else {
        console.log ("O ano não é bissexto.");
    }



    let numero2 = parseInt (prompt("Digite um número inteiro"));
    if (ano % 2 === 0) {
        console.log ("O número é par.");
    }
    else {
        console.log ("O número é ímpar.");
    }

    
    let nota1 = parseFloat ("Digite a primeira nota");
    let nota2 = parseFloat ("Digite a segunda nota");
    let nota3 = parseFloat ("Digite a terceira nota");
    let média = nota1 + nota2 + nota3

    if (média/3 >= 7){
        console.log ("O aluno está aprovado!");
    }
    else if (média/3 >= 5){
        console.log ("O aluno está em recuperação!");
    }
    else {
        console.log ("O aluno está reprovado!")
    }



let num1 = parseFloat (prompt("Digite o primeiro número"));
let num2 = parseFloat (prompt("Digite o segundo número"));
let num3= parseFloat (prompt("Digite o terceiro número"));

if (num1 > num2 && num1 > num3){
    console.log ("O primero número é o maior");
}
else if (num2 > num1 && num2 > num3){
    console.log ("O segundo número é o maior");
}
else {
    console.log ("O terceiro número é o maior");
}


let ano2 = parseInt (prompt("Digite um ano"));
if (ano2 % 2 === 0){
    console.log ("O ano é par.");
}
else {
    console.log ("O ano é ímpar.");
}



/*Escreva um programa que leia um número de 1 a 7 e imprima o dia da semana correspondente.
 
Crie um programa que verifique se uma letra é vogal ou consoante.
 
Faça um programa que converta um número em um mês do ano.
 
Crie um programa que classifique um dia como útil ou final de semana.
 
Escreva um programa que determine o nome de um polígono a partir do número de lados.
 
Faça um programa que verifique se um número é positivo, negativo ou zero.
 
Crie um programa que determine a estação do ano a partir do mês.

switch/case */


let diasemana = prompt("Digite um número de 1 a 7");

switch (diasemana){
    case '1':
        console.log ("Segunda-feira");
        break;
    case '2':
        console.log ("Terça-feira");
        break;
    case '3':
        console.log ("Quarta-feira");
        break;
    case '4':
        console.log ("Quinta-feira");
        break;
    case '5':
        console.log ("Sexta-feira");
        break;
    case '6':
        console.log ("Sábado");
        break;
    case '7':
        console.log ("Domingo");
        break;
    default:
        console.log ("Número inválido");
}

let letra = prompt ("Digite uma letra").toLowerCase();

switch (letra){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log ("Vogal");
        break;
    default:
        console.log ("Consoante");
}

let mesAno = prompt("Digite um número de 1 a 12");


switch (mesAno){
    case '1':
        console.log ("Janeiro");
        break;
    case '2':
        console.log ("Fevereiro");
        break;
    case '3':
        console.log ("Março");
        break;
    case '4':
        console.log ("Abril");
        break;
    case '5':
        console.log ("Maio");
        break;
    case '6':
        console.log ("Junho");
        break;
    case '7':
        console.log ("Julho");
        break;
    case '8':
        console.log ("Agosto");
        break;
    case '9':
        console.log ("Setembro");
        break;
    case '10':
        console.log ("Outubro");
        break;
    case '11':
        console.log ("Novembro");
        break;
    case '12':
        console.log ("Dezembro");
        break;
    default:
        console.log ("Número inválido");
}


let diaClassificação = prompt ("Digite um número inteiro de 1 a 7").toLowerCase();

switch (diaClassificação){
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
        console.log ("Dia útil");
        break;
    case '6':
    case '7':
        console.log ("Final de semana");
        break;
    default:
        console.log ("Dia inválido");
}


let poligono = parseInt (prompt("Digite o número de lados do polígono"))

switch (poligono){
    case 1:
    case 2:
        console.log ("Não existe");
        break;
    case 3:
        console.log ("Triângulo");
        break;
    case 4:
        console.log ("Quadrilátero");
        break;
    case 5:
        console.log ("Pentágono");
        break;
    case 6:
        console.log ("Hexágono");
        break;
    case 7:
        console.log ("Heptágono");
        break;
    case 8:
        console.log ("Octógono");
        break;
    case 9:
        console.log ("Eneágono");
        break;
    case 10:
        console.log ("Decágono");
        break;
    default:
        console.log ("Polígono com mais de dez lados");
    }


    let numeroAleatorio = parseFloat (prompt("Digite um número"));

    switch (true){
        case numeroAleatorio > 0:
            console.log ("O número é positivo");
            break;
        case numeroAleatorio < 0:
            console.log ("O número é negativo");
            break;
        default:
            console.log ("O número é zero")
    }


    let mesEstacao = parseInt (prompt("Digite um número de 1 a 12"))
    switch (mesEstacao){
        case 1:
        case 2:
            console.log ("Verão");
            break;
        case 3:
            console.log ("Verão e outono");
            break;
        case 4:
        case 5:
            console.log ("Outono");
            break;
        case 6:
            console.log ("Outono e inverno");
            break;
        case 7:
        case 8:
            console.log ("Inverno");
            break;
        case 9:
            console.log ("Inverno e primavera");
            break;
        case 10:
        case 11:
            console.log ("Primavera");
            break;
        case 12:
            console.log ("Primavera e verão");
            break;
        default:
            console.log ("Mês não identificado")
        }
        


