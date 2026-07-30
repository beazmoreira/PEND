console.log("******Hora atual e data*******");
console.log("Data e Hora");
function desafio(){
    let data = new Date();
    console.log(data.getHours()+ ":" + data.getMinutes()+":" + data.getSeconds()+ "   " + data.getDate()+"/" + (data.getMonth() +1) + "/" +data.getFullYear());
}
desafio();

//Receba 2 números e e mostra soma e média
console.log("******** Recebe dois números com soma e média*********");
let nm1 = Number(prompt("Digite um número"));
console.log("número 1:", nm1);

let nm2 = Number(prompt("Digite um número"));
console.log("número 2:", nm2);

function somar(a, b) {
    return a + b;
}

function Media(a, b) {
    return (a + b) / 2;
}

let soma = somar(nm1, nm2);
let media = Media(nm1, nm2);


console.log("Soma:", soma);
console.log("Média:", media);


// função que recebe nome e mostra quantidade de letras e nome em maiusculo
console.log("********Recebe um nome e mostra qua. de letras e nome em maiusculo********");

let nome = prompt("Digite um nome:");

function texto(nome) {
console.log("Quantidade de letras:", nome.length);
console.log("NOme em maíusculo:", nome.toUpperCase());
}

texto(nome);

console.log("********Reecebe uma frase e verifica se contém uma palavra*******");
let frase = prompt("Digite uma frase:");

function verificarHTML(frase) {
    console.log("Contém 'HTML' :", frase.includes("HTML"));
}
verificarHTML(frase);