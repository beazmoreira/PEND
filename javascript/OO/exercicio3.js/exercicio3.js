
// classe 
class Produto {
    //
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    //metodo
    vender() {
        console.log("vendeu");
    }
    repor() {
        console.log("repos");
    }

    alterarPreco() {
        console.log(`${this.nome} alterou o preço.`);
    }

}
//iniciando características da classe
const produto1 = new Produto("Sorvete", "20,00", "30");
console.log("produto1: ", produto1);

//
const produto2 = new Produto("Chocolate", "10,00", "50");
console.log("produto2: ", produto2);

//
const produto3 = new Produto("Morango", "8,00", "30");
console.log("produto3: ", produto3);



console.log("--------------------------");
console.log("Atributos do produto 1:");
console.log("-", produto1.nome);
console.log("- ", produto1.preco);
console.log("- ", produto1.estoque);
console.log("--------------------------");



console.log("--------------------------");
console.log("Atributos do produto 2:");
console.log("-", produto2.nome);
console.log("- ", produto2.preco);
console.log("- ", produto2.estoque);
console.log("--------------------------");



console.log("--------------------------");
console.log("Atributos do produto 3:");
console.log("-", produto3.nome);
console.log("- ", produto3.preco);
console.log("- ", produto3.estoque);
console.log("--------------------------");




//metodo
produto1.vender();

produto2.repor();

produto3.alterarPreco();