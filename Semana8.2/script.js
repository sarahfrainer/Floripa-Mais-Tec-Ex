var tit = document.getElementById('titulo');

console.log (tit);

tit.style.backgroundColor = 'blue';

var tituloprinc = document.querySelector ('.titulo1');

console.log (tituloprinc)

tituloprinc.textContent = 'Esse é o novo título';


var paragrafoprinc = document.querySelector ('.paragrafo1');

console.log (paragrafoprinc)

paragrafoprinc.textContent = 'Esse é o novo parágrafo';


var itenslista = document.querySelectorAll ('.item');

console.log (itenslista);

itenslista[0].textContent = 'Item 1 atualizado;';
itenslista[1].textContent = 'Item 2 atualizado;';
itenslista[2].textContent = 'Item 3 atualizado;';


var novoItem = document.createElement("li");
var texto = document.createTextNode("Novo item inserido;");
novoItem.appendChild(texto);
console.log (novoItem);

var lista = document.querySelector('.lista');
console.log(lista);

lista.appendChild(novoItem);

var excluirItem = document.querySelector ('.lista');
var ItemExcluido = document.querySelector ('.lista li')
excluirItem.removeChild(ItemExcluido);


var estiloLista = document.querySelectorAll ('.item');
estiloLista.forEach (item=> {
    item.style.color = 'red';
})

var titulo1 = document.querySelector ('#titulo');
titulo1.setAttribute("class", "testandoClasse");
console.log (titulo1);