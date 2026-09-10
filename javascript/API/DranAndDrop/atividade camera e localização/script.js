const canvas = document.querySelector("#canvas")
const botao = document.querySelector("#botao")
const foto = document.querySelector("#foto")
const video = document.querySelector("#camera");

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
})
    .then(function (stream) {
        video.srcObject = stream;
    })

    .catch(function (erro) {
        console.log("Erro ao acessar a camera:", erro);
    });
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude: ", posicao.coords.latitude);
        console.log("Longitude: ", posicao.coords.longitude);
        console.log("Precisão: ", posicao.coords.accuracy);
    },
    function (erro) {
        console.log("Não foi possivel obter a localização.", erro);
    }
);

botao.addEventListener("click", function () {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    foto.src = canvas.toDataURL("image/png");
});