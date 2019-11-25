function init () {
    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var x = 0;
    var y = canvas.height / 2;

    var date = new Date();

    
    function draw (x) {
        
        ctx.font = "48px Verdana";
        ctx.strokeStyle = "#52ce90";
        ctx.strokeText(date, x, y);
        ctx.stroke();
        
    }
    
    function animate () {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(x%canvas.width);
        x++;
    }
    
    var interval = setInterval(animate, 5)
        
}

// check if browser supports html canvas
if (canvas.getContext) {
    
    init();
}

else {
    
    ctx.strokeText("Your browser doesn't support html canvas", x, y);
}