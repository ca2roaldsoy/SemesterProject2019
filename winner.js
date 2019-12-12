function init () {

var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');
var particles = [];
    

function draw() {
    
  var particle = {
      
    x: canvas.width / 2,
    y: canvas.height / 2,
    velocityX: Math.random() * 2,
    velocityY: Math.random() * 2,
    color: "red",
    size: 7,
    opacity: 1,
    
  }

  particles.push(particle);

  if (particles.length > 150) {
    particles.shift();
  }
}

function anim() {
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    draw();
    
    for (var i = 0; i < particles.length; i++){
    var p = particles[i];
    context.fillStyle = `rgba(0, 255, 0, ${p.opacity}`;
    context.fillRect(p.x, p.y, p.size, p.size);
    p.x = p.x + Math.cos(p.velocityX - 100);
    p.y = p.y + Math.sin(p.velocityY + 200);
    
  }
        
    p.opacity -= i/100;
    
 }
    var interval = setInterval(anim);
    
}
// test to see browser support
if(canvas.getContext){
       
    init(); 
}

else {
    
    alert("your browser does not support html canvas")
}