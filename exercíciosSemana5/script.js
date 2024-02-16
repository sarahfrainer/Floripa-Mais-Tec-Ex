const fruta = prompt ("Digite o nome da fruta");
do {
switch (fruta.toLocaleLowerCase) {
    case 'morango':
        alert ("R$5,99");
        break;
    case 'banana':
        alert ("R$1,99");
        break;
    case 'tangerina':
        alert ("R$3,99");
        break;
    default:
        alert ("não identificado");
        break;
}
} while (fruta !== "0" || fruta !== "sair");