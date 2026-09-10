let imagemSucesso = document.getElementById("imgSim");
let imagemErro = document.getElementById("imgNao");

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

        function(posicao) {
            
            console.log("Latitude:", posicao.coords.latitude);
            console.log("Longitude:", posicao.coords.longitude);
            console.log("Precisão:", posicao.coords.accuracy);

            imagemSucesso.style.display = "block";
            imagemErro.style.display = "none";
        },

        function(erro) {
            
            console.log("Não foi possível obter a localização.", erro);

            imagemSucesso.style.display = "none";
            imagemErro.style.display = "block";
        }

    );

} else {

    
    imagemSucesso.style.display = "none";
    imagemErro.style.display = "block";

}