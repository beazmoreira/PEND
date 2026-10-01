const API_KEY = "62ef1a53d791b2c6ad14979ee456b165";

const URL_GNEWS = `https://gnews.io/api/v4/top-headlines?country=br&lang=pt&apikey=${API_KEY}`;

// api que escolhi para noticias, apesar de seu carregamento limitado, foi a que se adaptou.

async function carregarNoticiasGNews() {

    try {

        console.log("Conectando à API GNews...");

        const resposta = await fetch(URL_GNEWS);

        const dados = await resposta.json();

        console.log("Resposta da API:", dados);

        // essa parte carrega as apis de fora para dentro do site

        if (dados.articles && dados.articles.length > 0) {

            console.log("Notícias recebidas com sucesso:", dados.articles);

            renderizarNoticiasNoLayout(dados.articles);

        } else if (dados.errors) {

            console.error("Erro retornado pela API GNews:", dados.errors);

        } else {

            console.warn("Nenhuma notícia encontrada.");

        }

        // essa parte serve para filtrar a resposta da minha api e ver se vai falhar ou nao para avisar ao usuário

    } catch (erro) {

        console.error("Erro na requisição:", erro);

    }
}
// capturar e tratar qualquer falha grave que aconteça durante a tentativa de buscar as notícias

function renderizarNoticiasNoLayout(artigos) {

    const secaoCards = document.querySelector(".cards");

    if (!secaoCards) return;

    secaoCards.innerHTML = "";

    artigos.forEach(noticia => {

        if (noticia.title) {

            const novoArtigo = document.createElement("article");

            novoArtigo.className = "noticia";

            novoArtigo.innerHTML = `
                <h3>
                    <a href="${noticia.url}" target="_blank">
                        ${noticia.title}
                    </a>
                </h3>

                <p>
                    ${noticia.description || "Clique no título para ler a matéria completa."}
                </p>

                ${
                    noticia.image
                    ? `<img src="${noticia.image}" alt="Imagem da notícia">`
                    : ""
                }
            `;

            secaoCards.appendChild(novoArtigo);
        }

    });

}

// essa parte é a parte visual da api, ptocura no html, faz proteção ao código, limpa o local antes de por a noticia
carregarNoticiasGNews();

// clima começo a api

const informacoesClima =
    document.getElementById(
        "informacoesClima"
    );


const atualizarClima =
    document.getElementById(
        "atualizarClima"
    );


function buscarClima() {

    informacoesClima.innerHTML =
        "<p>Carregando informações...</p>";

    // procura no html, busca dados metereologicos


    fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=-21.4678&longitude=-47.0046&current=temperature_2m,relative_humidity_2m,weather_code"
    )


        .then(function (resposta) {

            return resposta.json();

        })


        .then(function (dados) {

            const temperatura =
                dados.current.temperature_2m;


            const umidade =
                dados.current.relative_humidity_2m;


            informacoesClima.innerHTML = `

                <p>
                    <strong>
                        Temperatura:
                    </strong>

                    ${temperatura}°C
                </p>

               

            `;

        })


        .catch(function () {

            informacoesClima.innerHTML = `

                <p>
                    Não foi possível carregar
                    o clima.
                </p>

            `;

        });

}

// manda mensagem ao usuario se o clima nao carregar
// Carrega o clima automaticamente
// quando a página abre

buscarClima();



// BOTÃO ATUALIZAR CLIMA


atualizarClima.addEventListener(
    "click",
    buscarClima
);