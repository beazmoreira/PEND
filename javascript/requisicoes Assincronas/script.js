const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#buscarUsuarios");
const idUsuario = document.querySelector("#idUsuario");

// botao.addEventListener("click", () => { 
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(resposta => resposta.json())
//         .then(dados => {
//             resultado.innerHTML = "";
//             dados.forEach(usuario => {
//                 resultado.innerHTML += `
//                     <p>
//                         <strong>${usuario.name}</strong><br>
//                         ${usuario.email}
//                     </p>
//                     <hr>
//                 `;
//             });
//         })
//         .catch(erro => { 
//             console.log("Erro:", erro);
//         });
// }); 


botao.addEventListener("click", async () => {
    const id = idUsuario.ariaValue;

    if (id === "") {
        resultado.innerHTML = "Digite um ID";
        return;
    }
    try {

        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com.users"
        );
        const dados = await resposta.json();

        resultado.innerHTML = "";

        dados.forEach(usuario => {
            resultado.innerHTML += `
            <p>
            <strong>${usuario.name}</strong><br>
    
            Email: ${dados.email}<br>
            Cidade: ${dados.adress.city}<br>
            Telefone: ${dados.phone}<br>
            </p>
            <hr>
            `;
        });

    } catch (erro) {

        resultado.innerHTML = "Erro ao buscar usuários";
        console.log(erro);
    }
});