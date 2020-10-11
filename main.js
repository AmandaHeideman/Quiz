document.addEventListener("DOMContentLoaded", function(e) {
    //let start = new startNewGame();
    
    //skapar startsidan där spelare får mata in namn och antal spel
    let div = document.getElementById("div"); 

    let name_q = document.createElement("p");
    name_q.innerHTML = "Enter your name:";
    let name_input = document.createElement("input");

    let storeName = localStorage.getItem("name_input")
    name_input.value = storeName;

    let game_q = document.createElement("p");
    game_q.innerHTML = "Enter number of questions:";
    let game_input = document.createElement("input");
    game_input.value = 10;

    let btnDiv = document.getElementById("btnDiv");
    let btn = document.createElement("button");
    btn.innerHTML = "Next";

    //lägger skapade element i div:en så de syns på sidan
    div.appendChild(name_q).after(name_input); 
    div.appendChild(game_q).after(game_input);
    btnDiv.appendChild(btn);

    let game;
    let player;
    let i = 1;
    btn.addEventListener("click", function(e){
        
        //startar ett nytt spel ifall det inte redan finns ett
        if (game==null){ 
            //sparar spelarens namn i localStorage
            localStorage.setItem("name_input", name_input.value);
            
            player = new Player(name_input.value);
            game = new Game(game_input.value, player);
        }
        console.log(player);
        if(i<=game_input.value){
            game.playerAnswers();
            game.getQuestion(i);
            i++
            
            //rensar div:en så sidan blir tom inför nästa fråga, förutom knappen som har en egen div
            div.innerHTML = "";
        }
        else if(i>game_input.value){
            div.innerHTML = "Game over"
            let endscreen = document.createElement("p");
            endscreen.innerHTML = player.name + " got " + player.points + " points"
            div.appendChild(endscreen);
            btn.innerHTML = "Play again?"
            btn.addEventListener("click", function(e){
                i=0;
                game = null;
                player = null;
            });
        }
    })

}); 