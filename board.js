//get local storage

var playerName = document.querySelector(".playerName");
var getLocal;

function getStorage(arg1) {
    
    getLocal = localStorage.getItem(arg1);
    playerName.innerHTML = getLocal;
    
};

getStorage("player");

var tiles = 31;
var board = document.getElementById("board");
var centerW = window.innerWidth / 2-30 + "px";
var centerH = window.innerHeight / 2-115 + "px";
var d = 180;
var r = "rotate(" + d + "deg)";
var tileContainer = document.getElementById("board");
var jumbo = document.querySelector(".jumbo");
var jumboTron = document.querySelector(".jumbotron")
var jumboTitle = document.querySelector(".jumboTitle");
var jumboText = document.querySelector(".jumboText");
var jumboImg = new Image();
var button = document.getElementById("closeBtn");

// classes and append
jumboImg.className = "jumboImg";
jumboTron.appendChild(jumboImg);

// styles
tileContainer.style.maxWidth = "100%";
jumboText.style.minWidth = "400px";
jumboText.style.paddingLeft = "65px";
button.style.width = "15%";

// constructing board game
function boardGame () {

    for (var i = 0; i < tiles; ++i) {

        var tile = document.createElement('div');
        var tileId = document.createElement('div');
        
        //create tiles in a circle
        var radius = 360 * i / tiles;
        var rotate = 'translate(' + centerW + ',' + centerH + ') rotate(' + radius + 'deg) translate(0px, -400px)';

        tileId.style.padding = "10px";
        tileId.classList = "tile";
        tile.classList = "box";
        tile.setAttribute('style', '-webkit-transform:' + rotate);
        tile.id = "tile"+i;
        
        tile.appendChild(tileId);
        tileContainer.appendChild(tile);

        // fill tiles with informantion
        if(tile.id === "tile0") {

            tileId.innerHTML += "START";
            tile.style.backgroundSize = "50px 15px";
            tile.style.backgroundPosition = "10px 40px";
            tile.style.paddingTop = "10px";

        } 

        if(tile.id === "tile15") {

            tileId.innerHTML += "Extra Turn";
            tileId.style.transform = r;
        } 

         if(tile.id === "tile11") {

            tileId.innerHTML += "Move back 3 spaces";
            tileId.style.transform = r;
    
        } 

         if(tile.id === "tile28") {

            tileId.innerHTML += "Move back 4 spaces";
            tileId.style.transform = r+180;
        } 

        if(tile.id === "tile30") {

            tileId.style.transform = r+180;
        } 

    }
 
}

boardGame();

var counter = 0;
var playerScore = 0;

// create a token
var token = document.createElement("div");

// add class to token
var characterClass = getLocal.toLowerCase().replace(" ", "-");
token.classList.add("token__1", characterClass);
token.id = "token";

// Start token at START
var thisTile = document.getElementById("tile0");
thisTile.appendChild(token);

// Game
function game () {

    var dices = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    var diceRoll = document.getElementById("diceRoll");
    var dice = document.querySelector("#dice");
    var diceEyes = document.querySelectorAll(".dice__eyes");
    var sum = document.querySelector(".sum");
    var diceCount = 0;

    // Start the Game
    window.onload = setTimeout(function () {    
    jumboTitle.innerHTML = "Play Game";
    jumboText.innerHTML = "Cersei Lannister is about to take the crown and rule the seven kingdoms! <br> We recon you got <strong>8</strong> turns to get the crown before here. Be aware as she watches for everyone. It is up to you " + getLocal + ", to take the crown before here.<br><br> Please be sure to visit the houses, you might be lucky.<br><br> If you role <strong>6</strong>, you get an extra turn! Start by rolling the dice<br><i>When you are ready press 'Play Game'";
    jumboImg.src = "images/Logo/swordLogo.png";
    jumboImg.alt = "Two swords crossing a crown";
    jumbo.style.display = "flex";
    jumboImg.style.width = "300px";
    button.style.backgroundColor = "#748F00";
    button.textContent = "Play Game";
    jumboText.style.maxWidth = "1000px";


    }, 1000)

    // Roll the dice    
    diceRoll.addEventListener("click", function(){

        function initDices () {

            counter++;
            sum.innerHTML = "<b>" + counter + "</b>" + "/8";
            
            // initialize game
            var interval = setInterval(function(){

                diceRoll.style.display = "none";
                nextDice();

            }, 150);


            // loop through numbers and display final number
             setTimeout(function() {

                var max = 6;
                var roll = Math.ceil(Math.random() * 6);

                // add roll to player score
                playerScore += roll;

                // clear the token from all tiles
                var tiles = document.querySelectorAll(".box");

                tiles.forEach(function(tile) {
                    var elInTile = tile.childNodes;

                    elInTile.forEach(function(element) {

                        // if token is inside, remove it
                        if (element.id === "token") {
                            element.remove();
                            token.classList.remove("tileGlow");
                            
                        } else {
                            
                            token.classList.add("tileGlow");
                        }
                 
                    });
                })

                // append the token to the tile
                var currentTile = document.getElementById("tile" + playerScore);
                 
                 if(playerScore >= tiles.length-1 && counter < 9) {
                    
                    thisTile.appendChild(token);
                    diceCount = 0;
                    saveStorage(Math.round(playerScore));// * roll / counter * 10));
                    window.location.href = "winner.html";
                    
                }
                 
                currentTile.appendChild(token);
                 
                 console.log(playerScore);
                
                // move token x spaces
                setTimeout(function() {

                     // Tile 11 - Move back 3 spaces
                     if(currentTile.id == "tile11") {

                         currentTile = document.getElementById("tile8");
                         currentTile.appendChild(token);
                         playerScore -= 3;

                         jumboTitle.innerHTML = "You are under attack";
                         jumboText.innerHTML = "Cersei Lannister has sent her evil minions to stop you for moving forward. <br> You are outnumbered <br><br> Retreat, Retreat, Retreat";
                         jumboImg.src = "images/jumbo/minions.jpg";
                         jumboImg.alt = "Woman sending birds to a castle";
                         jumbo.style.display = "flex";
                         jumboImg.style.width = "720px";
                         button.style.backgroundColor = "#C20C0C";
                         button.textContent = "Move back 3 spaces";

                     // Tile 15 - Extra Turn        
                     } else if (currentTile.id == "tile15") {

                         jumboTitle.innerHTML = "Help from an ally";
                         jumboText.innerHTML = "Hodor has come to your aid you on your mission. He will hold the door so the enemies can't reach you! <br> Get an extra turn";
                         jumboImg.src = "images/jumbo/aid.jpg";
                         jumboImg.alt = "Knight in armour";
                         jumbo.style.display = "flex";
                         jumboImg.style.width = "720px";
                         button.style.backgroundColor = "#748F00";
                         button.textContent = "Get an EXTRA turn"
              
                     // Tile 29 - Move back 5 spaces 
                     } else if (currentTile.id == "tile28") {

                         currentTile = document.getElementById("tile25");
                         currentTile.appendChild(token);
                         playerScore -= 4;

                         jumboTitle.innerHTML = "Watch out Cersei Lannister is on to you";
                         jumboText.innerHTML =  "Cersei Lannister has sensed your coming. She has taken her guards out to search for you. <br><br> Hurry " + getLocal + " Retreat back to safety";
                         jumboImg.src = "images/jumbo/guards.jpg";
                         jumboImg.alt = "Battle cavalry";
                         jumbo.style.display = "flex";
                         jumboImg.style.width = "720px";
                         button.style.backgroundColor = "#C20C0C";
                         button.textContent = "Move back 5 spaces";
                         

                     // Tile 5 - House Baratheon
                     } else if (currentTile.id == "tile5") {

                        jumboTitle.innerHTML = "House Baratheon";
                        jumboText.innerHTML =  "Welcome to House Baratheon, " + getLocal + ". Come and join us for a meal! <br><br><i>Stay over a turn</i>"
                        jumboImg.src = "images/GameMap/house_baratheon.png";
                        jumboImg.alt = "House Baratheon";
                        jumbo.style.display = "flex"; 
                        jumboImg.style.width = "400px"; 
                        button.style.backgroundColor = "#C20C0C";
                        button.textContent = "Loose a turn"; 
                        ++counter

                     // Tile 7 - House Greyjoy
                     } else if (currentTile.id == "tile7") {

                        jumboTitle.innerHTML = "House Greyjoy";
                        jumboText.innerHTML =  "Welcome to House Greyjoy, " + getLocal + ". <br> We are wishing you welcome, and receives you with a horse on your journey to move faster <br><br><i>Get an extra turn</i>"
                        jumboImg.src = "images/GameMap/house_greyjoy.png";
                        jumboImg.alt = "House Greyjoy";
                        jumbo.style.display = "flex"; 
                        jumboImg.style.width = "400px";
                        button.style.backgroundColor = "#748F00";
                        button.textContent = "Get an EXTRA turn"
                        --counter

                    // Tile 20 - House Stark
                    } else if (currentTile.id == "tile20") {

                        jumboTitle.innerHTML = "House Stark";
                        jumboText.innerHTML =  "Welcome to House Stark, " + getLocal + ".<br>You get help from the 3 eyed raven, to watch for enemies, and of course Hodor will hold the door<br><br><i>Get an extra turn</i>"
                        jumboImg.src = "images/GameMap/house_stark.png";
                        jumboImg.alt = "House Stark";
                        jumbo.style.display = "flex"; 
                        jumboImg.style.width = "400px";
                        button.style.backgroundColor = "#748F00";
                        button.textContent = "Get an EXTRA turn";
                        --counter

                    // Tile 25 - House Targaryen
                    } else if (currentTile.id == "tile24") {

                        currentTile = document.getElementById("tile26");
                        currentTile.appendChild(token);
                        playerScore += 2;

                        jumboTitle.innerHTML = "House Targaryen";
                        jumboText.innerHTML =  "Welcome to House Targaryen, " + getLocal + ".<br>Fly on a dragon on your quest. They will help you move quickly<br><br><i>Move 2 spaces forward</i>"
                        jumboImg.src = "images/GameMap/house_targaryen.png";
                        jumboImg.alt = "House Targaryen";
                        jumbo.style.display = "flex"; 
                        jumboImg.style.width = "400px";
                        button.style.backgroundColor = "#748F00";
                        button.textContent = "Move forward 2 spaces";

                    // Tile 28 - House Lannister
                    } else if (currentTile.id == "tile27") {

                        jumboTitle.innerHTML = "House Lannister";
                        jumboText.innerHTML =  "Oh no! You have been spotted by Lannister.<br>They have imprisoned you and raised the alarm<br><br><i>Loose a turn</i>"
                        jumboImg.src = "images/GameMap/house_lannister.png";
                        jumboImg.alt = "House Lannister";
                        jumbo.style.display = "flex"; 
                        jumboImg.style.width = "400px";
                        button.style.backgroundColor = "#C20C0C";
                        button.textContent = "Loose a turn";
                        ++counter
                    
                    } 
                    
                     }, 500)
                 
                  // defeat
                if(playerScore < tiles.length && counter >= 8) {

                    setTimeout(function () {
                    jumboTitle.innerHTML = "Defeat";
                    jumboText.innerHTML = "This is a sad day. Cersei Lannister has been given the crown, and now rules the 7 kingdoms";
                    jumboImg.src = "images/jumbo/knight_defeat.jpg";
                    jumboImg.alt = "defeated knight";
                    jumbo.style.display = "flex";
                    jumbo.style.zIndex = 10;
                    button.textContent = "Try Again";
                    button.style.backgroundColor = "#C20C0C";
                    diceCount = 0;
                    button.addEventListener("click", function() {

                        window.location.href = "index.html";
                    })

                    }, 600)
                };


                 currentTile.appendChild(token);
                // dice roll
                var diceNr = document.getElementById("diceNr");

                 if(roll === 1) {

                    diceNr.src = "images/Dice/1x/" + dices[0];
                    clearInterval(interval);
                }

                if(roll === 2) {

                    diceNr.src = "images/Dice/1x/" + dices[1];
                    clearInterval(interval);
                }

                if(roll === 3) {

                    diceNr.src = "images/Dice/1x/" + dices[2];
                    clearInterval(interval);
                }

                if(roll === 4) {

                    diceNr.src = "images/Dice/1x/" + dices[3];
                    clearInterval(interval);
                }

                if(roll === 5) {

                    diceNr.src = "images/Dice/1x/" + dices[4];
                    clearInterval(interval);
                }

                 if(roll === 6) {

                    diceNr.src = "images/Dice/1x/" + dices[5];
                    --counter;
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

            document.getElementById("diceNr").src = "images/Dice/1x/" + dices[diceCount];
        }

        window.onload = initDices();
    });

};

game();

// close jumbotrone
button.addEventListener("click", function(){
        
        jumbo.style.display = "none";
});

// back to index.html
document.getElementById("backBtn").addEventListener("click", function(){
    
    window.location.href = "index.html"
});

//Save to Local Storage
function saveStorage(playerScore) {
    
localStorage.setItem("playerScore", playerScore);
                
};

                    



