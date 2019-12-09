// Character Select
var allTokens = document.querySelectorAll(".characters__token--img");
var selected = document.querySelector("input[name='token']:checked"); 
var chInfo = document.getElementById("banner");

allTokens.forEach(function(token){
    
    token.addEventListener("click", function(){
        
        var playerName = this.dataset.name;
        
        if(selected != null) {
            
            chInfo.style.display = "block";
            this.classList.add("glow");
            saveStorage(playerName);
            
        } else {
            token.classList.remove("glow");
            removeStorage(playerName);
        }
    })
});



//Save to Local Storage
function saveStorage(player) {
    
    localStorage.setItem("player", player);
};

//Remove from Local Storage
function removeStorage(player) {
    
    localStorage.setItem("player", player);
};


var closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", function() {
    
    chInfo.style.display = "none"
});

var playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", function(){
    
    window.location.href = "the_board.html"
});
