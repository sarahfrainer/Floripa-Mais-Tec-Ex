
function criacao (){
var lista = document.querySelector('.lista');
console.log (lista);

var inputTarefa = document.querySelector('#tarefa'); 

var criarTarefa = document.createElement("li");

criarTarefa.setAttribute("class","item");

var coletarResposta = document.querySelector('#tarefa').value;

criarTarefa.appendChild(document.createTextNode(coletarResposta));

console.log (criarTarefa);

lista.appendChild(criarTarefa);


//criar botão concluído

var criarBt1 = document.createElement ("button");

criarBt1.setAttribute("id","bt1");

console.log(criarBt1);

criarBt1.appendChild (document.createTextNode("Concluído"));

criarTarefa.appendChild(criarBt1);

var concluir = document.getElementById ("bt1");

//adicionar evento
document.querySelector('.lista').addEventListener('click', function(event){
    if (event.target && event.target.nodeName == 'BUTTON' && event.target.textContent == "Concluído") {
        var riscar = event.target.parentElement;
        riscar.style.textDecoration = 'line-through';
    }
});


//criar botão de excluir
var criarBt2 = document.createElement ("button");

criarBt2.setAttribute("id","bt2");

console.log(criarBt2);

criarBt2.appendChild (document.createTextNode("Excluir"));

criarTarefa.appendChild(criarBt2);

//adicionar evento
document.querySelector('.lista').addEventListener('click', function(event){
    if (event.target && event.target.nodeName == 'BUTTON' && event.target.textContent == "Excluir") {
        var apagar = event.target.parentElement;
        apagar.remove();
    }
});


inputTarefa.value = "";

}





