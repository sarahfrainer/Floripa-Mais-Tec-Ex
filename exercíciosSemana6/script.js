function funcao1() {
    alert ("Seja bem-vindo!");
}

let meuNome = "Sarah Frainer";
document.getElementById("nome").innerHTML = `${meuNome}`;

let minhaFuncao = "Estudante de Programação";
document.getElementById("funcao").innerHTML = `${minhaFuncao}`;

let minhaExperiencia = "Estudante do curso FuturoDEV do Senai.";
document.getElementById("experiencias").innerHTML = `<i>${minhaExperiencia}</i>`;

let minhaHab1 = "Programação Front-end;";
document.getElementById("hab1").innerHTML = `${minhaHab1}`;

let minhaHab2 = "Trabalho em equipe;";
document.getElementById("hab2").innerHTML = `${minhaHab2}`;

let minhaHab3 = "Organização;";
document.getElementById("hab3").innerHTML = `${minhaHab3}`;

let minhaHab4 = "Proatividade.";
document.getElementById("hab4").innerHTML = `${minhaHab4}`;


let minhaBusca = "Um estágio na área de programação que permita aprendar e praticar minhas habilidades.";
document.getElementById("busca").innerHTML = `${minhaBusca}`;

function exibirmensagem (){
    prompt ("Digite uma mensagem para mim");
}

const botao = document.querySelector("#Botao");
botao.addEventListener("click", exibirmensagem);