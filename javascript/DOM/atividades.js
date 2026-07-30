let titulo = document.getElementById("titulo");
let btao1 = document.getElementById("btao1");
let btao2 = document.getElementById("btao2");


btao1.addEventListener("click", function () {
    titulo.style.color = "blue";
});

btao2.addEventListener("click", function () {
    titulo.style.color = "red";
});

// Atividade 2- Mostrar e esconder mensagem em um único botão
btao3.addEventListener("click", function() {
    let mensagem = document.getElementById("mensagem");
    if (mensagem.style.display === "none") {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
    }
});

// Atividade 3 - Contador de caracteres
let campoTexto = document.getElementById("campoTexto");
let contador = document.getElementById("contador");
    
    campoTexto.addEventListener("input", function() {
    contador.textContent = campoTexto.value.length;
});

//Atividade 4 - Contador de cliques
let btao4 = document.getElementById("btao4");
let contadorCliques = document.getElementById("contadorCliques");
let numeroCliques = 0;

btao4.addEventListener("click", function() {
    numeroCliques++;
    contadorCliques.textContent = numeroCliques;
});

//Atividade 5 e 6 - Criar elementos dinamicamente e remover elemento - Desafio Extra a pessoa deve confirmar a remoção do elemento criado. Se a pessoa clicar em "OK" o elemento é removido, se clicar em "Cancelar" o elemento permanece na lista.
let btao5 = document.getElementById("btao5");
let novoElementoTexto = document.getElementById("novoElementoTexto");
let listaElementos = document.getElementById("listaElementos");
let btao6 = document.getElementById("btao6");

btao5.addEventListener("click", function() {
    const item = document.createElement("li");
    item.textContent = novoElementoTexto.value;
    listaElementos.appendChild(item);
    novoElementoTexto.value = "";
});

btao6.addEventListener("click", function() {
    if (confirm("Tem certeza que deseja remover o último elemento?")) {
        listaElementos.removeChild(listaElementos.lastChild);
    }
});

//Atividade Hard - validação de campo (NOME) -mostrar campo não preenchido caso a pessoa tente enviar o formulário sem preencher o campo nome. O campo deve ficar com a borda vermelha. Se a pessoa preencher o campo nome corretamente, a borda do campo deve ficar verde.

let campoNome = document.getElementById("campoNome");
let btaoEnviar = document.getElementById("btaoEnviar"); 

btaoEnviar.addEventListener("click", function(event) {
    event.preventDefault();
    if (campoNome.value.trim() === "") {
        campoNome.classList.add("invalido");
    } else {
        campoNome.classList.remove("invalido");
        campoNome.classList.add("valido");
    }
});

