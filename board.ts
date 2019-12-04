function dice () {

var diceRoll = document.getElementById("diceRoll");
var dice = document.querySelector("#dice");
var diceEyes = document.querySelectorAll(".dice__eyes");

diceRoll.addEventListener("click", function(){
    
    
    var dices = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    var diceCount:number = 0;
    
    function initDices () {
        
        var interval = setInterval(function(){
        
            nextDice();
        
        }, 150);
        
         setTimeout(function() {

            var max:number = 6;
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