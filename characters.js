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

var playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", function(){
    
    window.location.href = "the_board.html"
});


counter = 0;

function apiReq (ids){
var api = ("https://anapioficeandfire.com/api/characters/" + ids);
fetch(api)

.then (result => result.json())
.then ((res) => { 
    
    (res)
    console.log(res);
    
    var charInfo = document.getElementById("banner");
   
    var label = document.querySelector(".characters__container");
    var cardBody = document.querySelector(".card-body");
    var ul = document.createElement("ul");
    label.appendChild(ul);
    charInfo.appendChild(label);

    switch (ids) {

            case ids:   cardBody.innerHTML += "<h3 class='card-title'>" + res.name + "</h3>";
                        cardBody.innerHTML += "<p class='card-text'><b> Title: </b>" + res.titles + "</p>";
                        ul.innerHTML += "<li class='list-group-item'><b> Born: </b>" + res.born + "</li>";
                        ul.innerHTML += "<li class='list-group-item'><b> Culture: </b>" + res.culture + "</li>";
            
                        if(res.culture == "") {
                
                        ul.innerHTML += "<li class='list-group-item'>Unkown</li>";
                            
                        }
            
                        if(res.title == "") {
                
                        label.innerHTML += "<p class='card-body'>Unkown</p>";
                            
                        }
                break;
    }
    
    
})
    
.catch (error => console.log(error))
    
};

apiReq(148);    // Arya Stark
apiReq(583);    // Jon Snow
apiReq(957);    // Sansa Stark
apiReq(338);    // Eddard Stark
apiReq(529);    // Jamie Lannister
apiReq(1052);   // Tyrion Lannister
apiReq(565);    // Joffrey Baratheon
apiReq(901);    // Robert Baratheon
apiReq(1022);   // Theon Greyjoy
apiReq(1303);   // Daenerys Targaryen