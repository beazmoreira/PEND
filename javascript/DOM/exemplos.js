document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM! (element.innerHTML) </p>";
document.getElementById("mensagem").textContent = "Texto simples, sem HTML (.textcontent)";
document.getElementById("foto").setAttribute("src", "https://pbs.twimg.com/media/HBxTex5XUAACWYR.jpg");
let url = document.getElementById("link").getAttribute("href");
console.log(url); //
document.getElementById("caixa").style.backgroundColor = "lightblue";
document.getElementById("alerta").classList.add("destaque");
document.getElementById("alert").classList.remove("oculto");

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript.";
document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem); //cria lista

let item = document.getElementById("item 1");
document.getElementById("list").removeChild(item);
