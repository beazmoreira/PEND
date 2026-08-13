//objeto
//Instância concreta de uma classe que aloca memória para representar uma 
//entidade, encapsulando estado e comportamento. (animal)


//atributos
//Campos ou variáveis de instância que definem a estrutura de dados e
//  o estado interno do objeto. (classificação)

//métodos
//Funções e rotinas membro que operam sobre os atributos, definindo a interface 
// de comportamento e mensagens do objeto.(resposta)

// classe 
class Animal {
    //
    constructor(especie, esqueleto, alimentacao, habitat) {
        this.especie = especie;
        this.esqueleto = esqueleto;
        this.alimentacao = alimentacao;
        this.habitat = habitat;
    }
    //metodo
    fugir() {
        console.log(" fugiu");
    }
    cacar() {
        console.log(" foi caçar");
    }

    dormir() {
        console.log(`${this.especie} dormiu.`);
    }

}
//iniciando características da classe
const animal1 = new Animal("Jaboti", "vertebrado", "onívoro", "norte-nordeste");
console.log("animal1: ", animal1);

//
const animal2 = new Animal("Aves- Pinguim", "Vertebrado", "carnívoro", "sul");
console.log("animal2: ", animal2);

//
const animal3 = new Animal("peixe-dourado", "vertebrado ", "herbívoro", "água salgada");
console.log("animal3: ", animal3);

const animal4 = new Animal("Água-viva", "invertebrado", "carnívoro", "água doce");
console.log("animal4: ", animal4);

//animal1
console.log("--------------------------");
console.log("Atributos dos animal 1:");
console.log("-", animal1.especie);
console.log("- ", animal1.esqueleto);
console.log("- ", animal1.alimentacao);
console.log("- ", animal1.habitat);
console.log("--------------------------");
animal1.dormir();

//animal2
console.log("--------------------------");
console.log("Atributos dos animal 2:");
console.log("-", animal2.especie);
console.log("- ", animal2.esqueleto);
console.log("- ", animal2.alimentacao);
console.log("- ", animal2.habitat);
console.log("--------------------------");
animal2.dormir();

//animal3
console.log("--------------------------");
console.log("Atributos dos animal 3:");
console.log("-", animal3.especie);
console.log("- ", animal3.esqueleto);
console.log("- ", animal3.alimentacao);
console.log("- ", animal3.habitat);
console.log("--------------------------");
animal3.dormir();

//animal4
console.log("--------------------------");
console.log("Atributos dos animal 4:");
console.log("-", animal4.especie);
console.log("- ", animal4.esqueleto);
console.log("- ", animal4.alimentacao);
console.log("- ", animal4.habitat);
console.log("--------------------------");
animal4.dormir();

//metodo
animal1.fugir();

animal2.cacar();

console.log(`${animal3.especie} é uma espécie.`);