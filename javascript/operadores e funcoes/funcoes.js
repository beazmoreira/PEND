function saudacao() {
    console.log("Olá, JavaScript!");
}
saudacao();

function nomeDaFfuncao(parametros) {
    return resultado;
}
function nome(nome) {
    console.log("Olá, "+ nome);
}

saudacao("Ana");

function somar(a,b) { 
    return a+b;
}
console.log(somar(5,3));

console.log("Calculo IMC")
function IMC(peso,altura) {
    return  peso/(altura*altura)
} 
console.log(IMC(63, 1.63));

console.log("par ou ímpar")
function par_ou_impar(num){
    return num % 2 === 0 ? "Par" : "Ímpar";
}
console.log(par_ou_impar(4));

console.log("********************* Funções Nativas*********************");

let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();
console.log("Dia:", data.getDate());
console.log("Mês:", data.getMonth() + 1);//a contagem inicia em 0 por isso o 1
console.log("Ano:", data.getFullYear());
console.log("Horas:", data.getHours());
console.log("Minutos:", data.getMinutes());
}

mostrarDataHora();

//DESAFIO
console.log("Data e Hora");
function desafio(){
    let data = new Date();
    console.log(data.getHours()+ ":" + data.getMinutes()+":" + data.getSeconds()+ "   " + data.getDate()+"/" + (data.getMonth() +1) + "/" +data.getFullYear());
}
desafio();

console.log(Math.PI);
function calcularOperacoes(numero) {
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondado:", Math.round(numero));
    console.log("Para cima:", Math.ceil(numero));
    console.log("Para baixo:", Math.floor(numero));    
    console.log("Quadrado:", Math.pow(numero, 2));    
    console.log("Valor absoluto:", Math.abs(numero));    

}
calcularOperacoes(7.8);

console.log("********Funções strings**********");
function analisarTexto(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Maíusculo:", texto.toUpperCase());
    console.log("Minúsculo:", texto.toLowerCase());
}

analisarTexto("JavaScript"); 

function verdade(frase) {
    console.log(frase.includes("JavaScript"));
}
verdade("Eu estudo JavaScript");

function justificacao(nome, curso) {
    return "aluno: " + nome + " | Curso: " + curso;
}
console.log(justificacao("José", "Front-end"));