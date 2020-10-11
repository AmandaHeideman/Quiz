document.addEventListener("DOMContentLoaded", function(e) {

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

    let btnDiv = document.getElementById("btnDiv");
    let btn = document.createElement("button");
    btn.innerHTML = "Next";

    //lägger skapade element i div:en så de syns på sidan
    div.appendChild(name_q).after(name_input); 
    div.appendChild(game_q).after(game_input);
    btnDiv.appendChild(btn);

    let game;
    btn.addEventListener("click", function(e){
        //startar ett nytt spel ifall det inte redan finns ett
        if (game==null){ 
            
            //sparar spelarens namn i localStorage
            localStorage.setItem("name_input", name_input.value);
            
            let player = new Player(name_input.value);
            game = new Game(game_input.value, player);
        }
        
        game.playerAnswers();
        game.getQuestion();
        
        //rensar div:en så sidan blir tom inför nästa fråga, förutom knappen som har en egen div
        div.innerHTML = "";
    })

}); 