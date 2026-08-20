class Produto {  

    constructor(nome, preco, categoria, desconto) {  

        this.nome = nome;  
        this.preco = preco;  
        this.categoria = categoria;  
        this.desconto = desconto;  

    }  

    aplicarDesconto() {   
        const valorDesconto = this.preco * (this.desconto / 100);   
        const precoFinal = this.preco - valorDesconto;   

        return precoFinal;   
    }   

    exibir() {  
        console.log(`${this.nome} Está exibido em produtos`);  
    }  

    exibirnaTela() {  
        const resultado = document.querySelector("#resultado");  

        resultado.innerHTML = "";  

        resultado.innerHTML += `  
            <div>  
                <p>Nome: ${this.nome}</p>  
                <p>Preco: ${this.aplicarDesconto()}</p>  
                <p>Categoria: ${this.categoria}</p>  
                <p>Desconto: ${this.desconto}%</p>  
            </div> 
        `;  
    }  
}  


const produtos = [];  

const nome = document.querySelector("#nome");   
const preco = document.querySelector("#preco");   
const categoria = document.querySelector("#categoria");   
const desconto = document.querySelector("#desconto");   
const botaoCadastrar = document.querySelector("#botaoCadastrar");   


botaoCadastrar.addEventListener("click", function () {   

    const produto = new Produto(  
        nome.value,   
        preco.value,   
        categoria.value,   
        desconto.value  
    );   
    localStorage.setItem("produto", JSON.stringify(produto));

    produtos.push(produto);  

    produto.exibirnaTela();   

});

const dados = localStorage.getItem("produto");

if (dados) {
    const produtoSalvo = JSON.parse(dados);

    const produto = new Produto(
        produtoSalvo.nome,
        produtoSalvo.preco,
        produtoSalvo.categoria,
        produtoSalvo.desconto
    );

    produto.exibirnaTela();
}