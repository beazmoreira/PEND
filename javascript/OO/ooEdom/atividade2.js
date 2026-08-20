class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = Number(preco);
        this.categoria = categoria;
        this.desconto = Number(desconto);

    }

    aplicarDesconto() {

        const valorDesconto = this.preco * (this.desconto / 100);
        const precoFinal = this.preco - valorDesconto;

        return precoFinal.toFixed(2);
    }

    excluirProduto(indice) {

        produtos.splice(indice, 1);

        this.salvarDados();

        this.exibirNaTela();
    }

    salvarDados() {

        localStorage.setItem(
            "produtos",
            JSON.stringify(produtos)
        );

    }

    recuperarDados() {

        const dados = localStorage.getItem("produtos");

        if (dados) {

            const produtosRecuperados = JSON.parse(dados);

            produtosRecuperados.forEach(produto => {

                produtos.push(
                    new Produto(
                        produto.nome,
                        produto.preco,
                        produto.categoria,
                        produto.desconto
                    )
                );

            });

        }

    }

    exibirNaTela() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        produtos.forEach((produto, indice) => {

            resultado.innerHTML += `
                <div>

                    <p>Nome: ${produto.nome}</p>

                    <p>
                        Preço: R$ ${produto.aplicarDesconto()}
                    </p>

                    <p>
                        Categoria: ${produto.categoria}
                    </p>

                    <p>
                        Desconto: ${produto.desconto}%
                    </p>

                    <button onclick="produtos[${indice}].excluirProduto(${indice})">
                        Excluir
                    </button>

                    <hr>

                </div>
            `;

        });

    }

}


// ========================================
// ARRAY DE PRODUTOS
// ========================================

const produtos = [];


// ========================================
// ELEMENTOS DO HTML
// ========================================

const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");


// ========================================
// CADASTRAR PRODUTO
// ========================================

botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(
        nome.value,
        preco.value,
        categoria.value,
        desconto.value
    );

    produtos.push(produto);

    produto.salvarDados();

    produto.exibirNaTela();

});


// ========================================
// CARREGAR PRODUTOS DO LOCALSTORAGE
// ========================================

const produtoInicial = new Produto("", 0, "", 0);

produtoInicial.recuperarDados();

produtoInicial.exibirNaTela();