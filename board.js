var counter = 0;
var playerScore = 0;

// Dice

function dice () {

var dices = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var diceRoll = document.getElementById("diceRoll");
var dice = document.querySelector("#dice");
var diceEyes = document.querySelectorAll(".dice__eyes");
var sum = document.querySelector(".sum");
var diceCount = 0;

diceRoll.addEventListener("click", function(){
    
    function initDices () {
        
        counter++;
        sum.innerHTML = "<b>" + counter + "</b>" + "/8";
        console.log(sum);
    
        if(counter > 8) {
        
        console.log("too bad")
        sum.style.color = "red";
        sum.style.fontSize = "70px";
        sum.style.right = "300px";
        
        }
    
    /*if(player === tiles.length && counter <= 8) {
    
        window.location.href = "winner.html"
    }*/
        
        var interval = setInterval(function(){
        
            diceRoll.style.display = "none";
            nextDice();
        
        }, 150);
        
        
        // loop through numbers and display final number
        
         setTimeout(function() {

            var max = 6;
            var roll = Math.ceil(Math.random() * 6);
            console.log(roll);
            var diceNr = document.getElementById("diceNr");
             
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

// constructing board game

function boardGame () {
   
var tiles = 31;
var board = document.getElementById("board");
var centerW = window.innerWidth / 2-30 + "px";
var centerH = window.innerHeight / 2-115 + "px";
var d = 180;
var r = "rotate(" + d + "deg)";
var jumbo = document.querySelector(".jumbotron")
var jumboTitle = document.querySelector(".jumboTitle");
var jumboText = document.querySelector(".jumboText");
var jumboImg = new Image();
jumboImg.className = "jumboImg";
jumbo.appendChild(jumboImg);

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
            jumboTitle.innerHTML = "Help from an ally";
            jumboText.innerHTML = "An ally has come to your aid you on your mission <br> Move forward";
            jumboImg.src = "Images/GameMap/aid.jpg";
            jumboImg.alt = "Knight";
            jumbo.style.display = "flex";

        } 

         if(tile.id === "tile11") {

            tileId.innerHTML += "Move back 3 spaces";
            tileId.style.transform = r;
            jumboTitle.innerHTML = "You are under attack";
            jumboText.innerHTML = "Cersei Lannister has sent her evil minions to stop you for moving forward. <br> You are outnumbered <br> Retreat, Retreat, Retreat";
            jumboImg.src = "Images/GameMap/minions.jpg";
            jumboImg.alt = "Woman sending birds to a castle";
            jumbo.style.display = "flex";
        } 

         if(tile.id === "tile29") {

            tileId.innerHTML += "Move back 5 spaces";
            tileId.style.transform = r+180;
            jumboTitle.innerHTML = "Watch out Cersei Lannister is on to you";
            jumboText.innerHTML = "Cersei Lannister has sensed your coming. She has taken her guards out to search for you. <br> Retreat back to safety";
            jumboImg.src = "Images/GameMap/guards.jpg";
            jumboImg.alt = "Battle. Cavalry";
            jumbo.style.display = "flex";
        } 

        if(tile.id === "tile30") {

            tileId.style.transform = r+180;
        } 

    }
 
    document.getElementById("closeBtn").addEventListener("click", function(){
        
        jumbo.style.display = "none";
    })
}

boardGame();

//get local storage

var playerName = document.querySelector(".playerName");

function getStorage(arg1) {
    
    var getLocal = localStorage.getItem(arg1);
    playerName.innerHTML = getLocal;
    
};

getStorage("player");






