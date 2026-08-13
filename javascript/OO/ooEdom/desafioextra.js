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

    excluirProduto(indice) {
        produtos.splice(indice, 1);
        this.exibirnaTela();
    }

    exibir() {  
        console.log(`${this.nome} Está exibido em produtos`);  
    }  

    exibirnaTela() {  
        const resultado = document.querySelector("#resultado");  

        resultado.innerHTML = "";  

        produtos.forEach((produto, indice) => {  

            resultado.innerHTML += `  
                <div>  
                    <p>Nome: ${produto.nome}</p>  
                    <p>Preco: ${produto.aplicarDesconto()}</p>  
                    <p>Categoria: ${produto.categoria}</p>  
                    <p>Desconto: ${produto.desconto}%</p>  

                    <button onclick="produtos[${indice}].excluirProduto(${indice})">
                        Excluir
                    </button>

                </div>  
            `;  
        });  
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

    produtos.push(produto);  

    produto.exibirnaTela();   

});