console.log("Olá, JavaScript!");
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let contador = 5;
contador++;
console.log(contador);

let c = 10;
let d = 5;
let e = 7;

console.log((c+d+e)/3);
console.log(c%d);

let x = 10;
let y = "10";
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);

console.log("adição: +", a+b);
console.log("subtração: -",a-b);
console.log("multiplicação: *",a*b);
console.log("divisão: /",a/b);
console.log("Resto da divisão: %",a%b);
console.log("exponenciação: **",a**b);
console.log("incremento: ++",a++);
console.log("decremento: --",b--);

console.log("Maior: >", a>b);
console.log("Menor: <", a<b);
console.log("Maior igual: >=", a>=b);
console.log("Menor igual:<= ", a<=b);
console.log(" igual:== ", a==b);
console.log("igual valor e tipo:=== ", a===b);
console.log("Diferente:!= ", a!=b);
console.log("Diferente valor e tipo:!== ", a!==b);

//Atividade 3 maior de idade
let idade = 17;
if (idade >=18){
console.log("Se idade = >18, maior de idade ");
}else{
console.log("Se idade, 17 menor de idade");}

//Atividade 4 maior de dois números 
let numero1 = 1;
let numero2 = 2;
if(numero1 > numero2){
console.log("O número 1 é maior")}
else if (numero1 < numero2) {
console.log("o número2 é maoir");}
else {
    console.log("Os números são iguais.")
}

console.log("Operadores lógicos")
let idad = 20;
let temCarteira = true;

console.log(idad >= 18 && temCarteira);

let chovendo = false;
let guardachuva = true;
console.log(chovendo || guardachuva);

let ligado = false;
console.log(!ligado); 

console.log("Atividade 5")
let nota = 8;
let frequencia = 80
if (nota <=7 && frequencia <= 74){
    console.log("Nota maior ou igual a 7: aprovado");
}else {
    console.log("Nota <=6: reprovado");
}

console.log("Atividade 6")
let login= true
let token = false

if (login == true || token == true){
console.log("voce entrou!");
}


