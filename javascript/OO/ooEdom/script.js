// const nome = document.querySelector ("#nome");
// const botaoCadastrar = document.querySelector ("#botaoCadastrar");
// const resultado = document.querySelector ("#resultado");

// botaoCadastrar.addEventListener("click", function () {

//     resultado.textContent = nome.ariaValue;
// });

class Aluno {

    constructor(nome, idade, curso, matricula) {

        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;

    }
    estudar() {
        console.log(`${this.nome} Está estudando`);
    }

    apresentar() {
        console.log(`${this.nome} Está apresentando`);
    }
}




class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    exibirnaTela() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.alunos.forEach(aluno => {
            resultado.innerHTML += `
            <div>

            <p>Nome: ${aluno.nome}</p>
            <p>Idade: ${aluno.idade}</p>
            <p>curso: ${aluno.curso}</p>
            <p>Matricula: ${aluno.matricula}</p>
            </div>
            `;
        });
    }







    // console.log("--------------------------");
    // console.log("Atributos do aluno 1:");
    // console.log("-", aluno1.nome);
    // console.log("- ", aluno1.idade);
    // console.log("- ", aluno1.curso);
    // console.log("- ", aluno1.matricula);
    // console.log("--------------------------");



    // console.log("--------------------------");
    // console.log("Atributos do aluno 2:");
    // console.log("-", aluno2.nome);
    // console.log("- ", aluno2.idade);
    // console.log("- ", aluno2.curso);
    // console.log("- ", aluno2.matricula);
    // console.log("--------------------------");

    //     exibirnaTela() {
    //         const resultado = document.querySelector("#resultado");

    //         resultado.innerHTML = "";

    //         alunos.forEach(aluno => {
    //             resultado.innerHTML += `
    //     <div>
    //     <p>Nome: ${aluno.nome}</p>
    //     <p>Idade: ${aluno.idade}</p>
    //     <p>Curso: ${aluno.curso}</p>
    //     <p>Matricula: ${aluno.matricula}</p>
    // `;
    //         });
    //     }
}


// const aluno1 = new Aluno("Júlia", "18", "DS", "5555");
// aluno1.exibirnaTela();


// const aluno2 = new Aluno("Beatriz", "17", "DS", "5713");
// aluno2.exibirnaTela();

// aluno1.apresentar();

// aluno2.estudar();

// const alunos = [];
// const nome = document.querySelector("#nome");
// const idade = document.querySelector("#idade");
// const curso = document.querySelector("#curso");
// const matricula = document.querySelector("#matricula");
// const botaoCadastrar = document.querySelector("#botaoCadastrar");


const turma = new Turma();
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");
const matricula = document.querySelector("#matricula");
const botaoCadastrar = document.querySelector("#botaoCadastrar");
botaoCadastrar.addEventListener("click", function () {

    const aluno = new Aluno(nome.value, idade.value, curso.value, matricula.value);

    turma.adicionarAluno(aluno);
    turma.exibirnaTela();

    // aluno.estudar();
    // alunos.push(aluno);
    // console.log(alunos);
    // aluno.exibirnaTela();
});