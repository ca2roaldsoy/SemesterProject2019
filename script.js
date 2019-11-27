function sigils () {
    
    var images = [
        
        "Images/GameMap/house_arryn.png",
        "Images/GameMap/house_baratheon.png",
        "Images/GameMap/house_bolton.png"
    ]
    
    
    
}



function init () {
    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var x = canvas.width;
    var y = canvas.height;
    
    /*var images = [
        
        "Images/GameMap/house_arryn.png",
        "Images/GameMap/house_baratheon.png",
        "Images/GameMap/house_bolton.png"
    ];
    
   
    var img = [];
    var imgCount = 0;
    
    function allLoaded() {
        
        for(var j=0; j < img.length; j++)
        ctx.drawImage(img[j], x/2-70, y/7*j, 100, 100);
    }
    
    for(var i=0; i < images.length; i++) {
                  
        var sigil = new Image();
        sigil.src = images[i];
        sigil.onload = () => {
            
            imgCount += 1;
            
            if(imgCount === images.length) {
                
                allLoaded()
            }
        }
        
        img.push(sigil);
    };*/
}
    /*function animate () {
        
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    var interval = setInterval(animate, 5)*/
       
// check if browser supports html canvas
if (canvas.getContext) {
    
    init();
}

else {
    
    ctx.strokeText("Your browser doesn't support html canvas", x, y);
}