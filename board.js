function dice () {

var diceRoll = document.getElementById("diceRoll");
var dice = document.querySelector("#dice");
var diceEyes = document.querySelectorAll(".dice__eyes");

diceRoll.addEventListener("click", function(){
    
    
    var dices = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    var diceCount = 0;
    
    function initDices () {
        
        var interval = setInterval(function(){
        
            diceRoll.style.display = "none";
            nextDice();
        
        }, 150);
        
         setTimeout(function() {

            var max = 6;
            var roll = Math.ceil(Math.random() * 6);
            console.log(roll);
             
             if(roll === 1) {
                
                document.getElementById("diceNr").src = "Images/Dice/1x/" + dices[0];
                clearInterval(interval);
            }
                
            if(roll === 2) {
                
                document.getElementById("diceNr").src = "Images/Dice/1x/" + dices[1];
                clearInterval(interval);
            }
                
            if(roll === 3) {
                
                document.getElementById("diceNr").src = "Images/Dice/1x/" + dices[2];
                clearInterval(interval);
            }
                
            if(roll === 4) {
                
                document.getElementById("diceNr").src = "Images/Dice/1x/" + dices[3];
                clearInterval(interval);
            }
            
            if(roll === 5) {
                
                document.getElementById("diceNr").src = "Images/Dice/1x/" + dices[4];
                clearInterval(interval);
            }
             
             if(roll === 6) {
                
                document.getElementById("diceNr").src = "Images/Dice/1x/" + dices[5];
                clearInterval(interval);
            }
             
              diceRoll.style.display = "block";
   
            }, 3000)
        
    }
    
    function nextDice() {
            
        if(dices.length === diceCount + 1) {
        
                diceCount = 0;
            
            } else {
                
                diceCount = Math.ceil(Math.random() * 5);
            }
        
        document.getElementById("diceNr").src = "Images/Dice/1x/" + dices[diceCount];
    }

    window.onload = initDices();
});
    
};

dice();

function boardGame () {
   
var tiles = 31;
var board = document.getElementById("board");
var centerW = window.innerWidth / 2-30 + "px";
var centerH = window.innerHeight / 2-130 + "px";
var d = 180;
var r = "rotate(" + d + "deg)";

for (var i = 0; i < tiles; ++i) {
    
    var tile = document.createElement('div');
    var radius = 360 * i / tiles;
    var rotate = 'translate(' + centerW + ',' + centerH + ') rotate(' + radius + 'deg) translate(0px, -400px)';
    
    tile.classList = "box";
    tile.setAttribute('style', '-webkit-transform:' + rotate);
    
    document.body.appendChild(tile);
    
    var tileId = document.createElement('div');
    tileId.style.padding = "10px";
    tileId.classList = "tile";
    tile.appendChild(tileId);
   
    
    tile.id = "tile"+i;
    
    if(tile.id === "tile0") {
        
        tileId.innerHTML += "START";
        tile.style.backgroundSize = "50px 15px";
        tile.style.backgroundPosition = "10px 40px";
        tile.style.paddingTop = "10px";
        
    } 
    
    if(tile.id === "tile15") {
        
        tileId.innerHTML += "Roll Again";
        tileId.style.transform = r;
        
    } 
    
     if(tile.id === "tile11") {
        
        tileId.innerHTML += "Move back 3 spaces";
        tileId.style.transform = r;
    } 
    
     if(tile.id === "tile29") {
        
        tileId.innerHTML += "Move back 5 spaces";
        tileId.style.transform = r+180;
    } 
    
    if(tile.id === "tile30") {
        
        tileId.style.transform = r+180;
    } 
    
}

}

boardGame();

function tokenMove () {
    
    
}