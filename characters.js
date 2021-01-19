/***************************    Selecting Character  ***************************/

var allTokens = document.querySelectorAll(".characters__token--img");
var selected = document.querySelector("input[name='token']:checked"); 
var chInfo = document.getElementById("banner");
var playBtn = document.getElementById("playBtn");
playBtn.style.display = "none";

allTokens.forEach(function(token){
    
    token.addEventListener("click", function(){
        
        var playerName = this.dataset.name;
        playBtn.style.display = "block";
        
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

//Get to next page
var playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", function(){
    
    window.location.href = "board.html"
});

/***************************    Get Characters Api  ***************************/
counter = 0;

/*
(148):  // Arya Stark
(583):  // Jon Snow
(957):  // Sansa Stark
(338):  // Eddard Stark
(529):  // Jamie Lannister
(1052): // Tyrion Lannister
(565):  // Joffrey Baratheon
(901):  // Robert Baratheon
(1022): // Theon Greyjoy
(1303): // Daenerys Targaryen
*/

const apiArr = [148, 583, 957, 338, 529, 1052, 565, 901, 1022, 1303];

const myApp = (function() {  
    const fetchData = async () => {

        let apiUrls = [];
        for (let i = 0; i < apiArr.length; i++) {
           apiUrls.push('https://anapioficeandfire.com/api/characters/'+ apiArr[i]);
        }

        try {
            Promise.all(apiUrls.map((url) =>
                fetch(url).then(resp => resp.json())
            ))
            .then(data=> {
                console.log(data)

                data.map(result => {
                    var charInfo = document.getElementById("banner");
   
                    var label = document.querySelector(".characters__container");
                    var cardBody = document.querySelector(".card-body");
                    var ul = document.createElement("ul");
                    label.appendChild(ul);
                    charInfo.appendChild(label);

                    cardBody.innerHTML += "<h3 class='card-title'>" + result.name + "</h3>";
                    cardBody.innerHTML += "<p class='card-text'> Title: <br>" + result.titles[0] + "</p>";
                        
                    if(result.titles[0] == "") {
            
                    cardBody.innerHTML += "<p class='card-text'>Unknown</p>";
                        
                    }
        
                    cardBody.innerHTML += "<p class='card-text'>Alias: <br>" + result.aliases[0] + "</p>";
                    cardBody.innerHTML += "<p class='card-text'> Born: <br>" + result.born + "</p>";
                  })
              })

        } catch (error) {
            console.error(error);
        }
    }

    const init = () => {
        fetchData();
    }

    return {
        init: init
    }
})();

myApp.init();