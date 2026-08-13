// classe 
class Carro {
    //
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    //metodo
    ligar() {
    console.log("Carro ligado");
}
    acelerar() {
    console.log("Acelerando");
}  

    frear() {
        console.log(`${this.modelo} freiou.`);
    }

}
//iniciando características da classe
const carro1 = new Carro("Volkswagen", "Gol", 2022, "branco");
console.log("carro1: ", carro1);

//
const Carro2 = new Carro("Toyota", "Corolla", 2025, "preto");
console.log("carro2: ", Carro2);

//
const Carro3 = new Carro("BMW", "BMW 320i ", "2022", "branco");
console.log("carro3: ", Carro3);

//carro1
console.log("--------------------------");
console.log("Atributos do Carro 1:");
console.log("-", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ",carro1.ano );
console.log("- ", carro1.cor);
console.log("--------------------------");

//carro2
console.log("--------------------------");
console.log("Atributos do Carro 2:");
console.log("-", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ",carro2.ano );
console.log("- ", carro2.cor);
console.log("--------------------------");
//carro3
console.log("--------------------------");
console.log("Atributos do Carro 3:");
console.log("-", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ",carro3.ano );
console.log("- ", carro3.cor);
console.log("--------------------------");
//metodo
carro1.ligar();

carro2.acelerar();

carro3.frear(`${this.modelo} freiou.`);