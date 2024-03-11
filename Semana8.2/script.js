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