const produtos = document.querySelectorAll(".produto");

const carrinho = document.querySelector("#carrinho");

produtos.forEach(function (produto) {

    produto.addEventListener("dragstart", function (event) {

        event.dataTransfer.setData("text", event.target.id);

    });

});

carrinho.addEventListener("dragover", function (event) {

    event.preventDefault();

});

carrinho.addEventListener("drop", function (event) {

    event.preventDefault();
    // cancelar o comportamento padrão que um elemento do navegador faria ao receber uma ação
    const id = event.dataTransfer.getData("text");
    // erve para resgatar o identificador ou dado de um elemento que foi arrastado e solto na tela pelo usuário
    const elemento = document.querySelector("#" + id);

    carrinho.appendChild(elemento);

    alert("Ingresso comprado!");

});