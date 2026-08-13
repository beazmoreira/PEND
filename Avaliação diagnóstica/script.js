document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formContato");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem");

        if (nome === "" || email === "") {
            mensagem.innerHTML = "Preencha todos os campos!";
        } else {
            mensagem.innerHTML = `Obrigada, ${nome}! Espere seu retorno.`;
        }
    });
});