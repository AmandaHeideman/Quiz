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

        let d = div.innerHTML;
        let n = name_input.value;
        let g = game_input.value;
        btn.addEventListener("click", this.start(d, n, g));
    }
    start(div, name_input, game_input){
        let game;
        //rensar div:en så sidan blir tom, förutom knappen som har en egen div
        div = "";

        if (game==null){ //startar ett nytt spel ifall det inte redan finns ett

            //sparar spelarens namn i localStorage
            localStorage.setItem("name_input", name_input);

            let player = new Player(name_input);
            game = new Game(game_input, player);
        }

        game.getQuestion();
        game.playerAnswers();
    }
}