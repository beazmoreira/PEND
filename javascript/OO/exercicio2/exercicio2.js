
// classe 
class Aluno {
    //
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }
    //metodo
    aprender() {
        console.log(" aprendeu");
    }
    estudar() {
        console.log(" estudou");
    }

    apresentar() {
        console.log(`${this.nome} apresentou.`);
    }

}
//iniciando características da classe
const aluno1 = new Aluno("Júlia", "18", "DS", "5555");
console.log("aluno1: ", aluno1);

//
const aluno2 = new Aluno("Beatriz", "17", "psicologia", "5713");
console.log("aluno2: ", aluno2);

//
const aluno3 = new Aluno("Bianca", "17", "ciência de dados", "5714");
console.log("aluno3: ", aluno3);

const aluno4 = new Aluno("Maicon", "20", "engenharia eletrônica e telecomunicações", "5720");
console.log("aluno4: ", aluno4);


console.log("--------------------------");
console.log("Atributos do aluno 1:");
console.log("-", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matricula);
console.log("--------------------------");



console.log("--------------------------");
console.log("Atributos do aluno 2:");
console.log("-", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matricula);
console.log("--------------------------");



console.log("--------------------------");
console.log("Atributos do aluno 3:");
console.log("-", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matricula);
console.log("--------------------------");



console.log("--------------------------");
console.log("Atributos do aluno 4:");
console.log("-", aluno4.nome);
console.log("- ", aluno4.idade);
console.log("- ", aluno4.curso);
console.log("- ", aluno4.matricula);
console.log("--------------------------");


//metodo
aluno1.aprender();

aluno2.estudar();

aluno3.apresentar();