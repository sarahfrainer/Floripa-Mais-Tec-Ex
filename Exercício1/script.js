let projeto1 =
document.getElementById("projeto1")

projeto1.addEventListener("click", function executarFuncao, false)

window.onclick = myFunction;

function myFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}
function executarFuncao(projeto1) {
window.alert("Projeto de site de bicicletas");
}


let cabeçalho =
document.getElementsByClassName ("cabeçalho")

