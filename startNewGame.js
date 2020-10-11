class startNewGame{
    constructor(){
        //skapar startsidan där spelare får mata in namn och antal spel
        let div = document.getElementById("div"); 

        let name_q = document.createElement("p");
        name_q.innerHTML = "Enter you name:";
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

        btn.addEventListener("click", function(e){
            this.start(div, name_input, game_input);
        });
    }
    start(div, name_input, game_input){
        let game;
        //rensar div:en så sidan blir tom, förutom knappen som har en egen div
        div.innerHTML = "";

        if (game==null){ //startar ett nytt spel ifall det inte redan finns ett

            //sparar spelarens namn i localStorage
            localStorage.setItem("name_input", name_input.value);

            let player = new Player(name_input.value);
            game = new Game(game_input.value, player);
        }

        game.getQuestion();
        game.playerAnswers();
    }
}