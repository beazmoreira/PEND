// para desenhar 1 linha

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

context.beginPath();  
// o canvas funciona de maneira diferente do plano cartesiano normal (x e y)
context.moveTo(10, 0);
context.lineTo(50, 10);
// define onde a linha termina
context.stroke();
// desenha

context.fillRect(50, 50, 150, 100);
// desenha um retangulo ultimos largura e altura

context.strokeRect(250, 50, 150, 100);
// retangulo transparente

context.beginPath();
context.arc(250, 250, 50, 0, Math.PI, true );
// colocar math * 2 para circulo inteiro 
context.stroke();