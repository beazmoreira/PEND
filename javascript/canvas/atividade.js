const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");


context.lineWidth = 5; 
context.lineCap = "round";
context.lineJoin = "round"; 


context.beginPath();
context.arc(250, 80, 35, 0, Math.PI * 2); 
context.stroke();

context.beginPath();  
context.moveTo(250, 120); 
context.lineTo(250, 200); 
context.stroke();


context.beginPath();  
context.moveTo(250, 120);
context.lineTo(300, 190); 
context.stroke();


context.beginPath();  
context.moveTo(250, 120);
context.lineTo(200, 170); 
context.stroke();

context.beginPath();  
context.moveTo(300, 270);
context.lineTo(250, 200); 
context.lineTo(200, 270); 
context.stroke();
