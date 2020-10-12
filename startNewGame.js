class startNewGame{
    constructor(){
        //skapar startsidan där spelare får mata in namn och antal spel
        
        var self = this;
        let div = document.getElementById("div"); 

        let name_q = document.createElement("p");
        name_q.innerHTML = "Enter your name:";
        let name_input = document.createElement("input");

        let storeName = localStorage.getItem("name_input")
        name_input.value = storeName;
        this.nameInput = name_input.value;

        let game_q = document.createElement("p");
        game_q.innerHTML = "Enter number of questions:";
        let game_input = document.createElement("input");
        game_input.type = "number";
        game_input.min = 5;
        game_input.max = 10;
        game_input.placeholder = 5;
        //this.gameValue = game_input.value;

        /* let option;
        let game_select = document.createElement("select");
        for (let i = 5; i<=10; i++){
            option = document.createElement("option");
            option.value = i;
            option.innerHTML = i;
            game_select.appendChild(option);
        }
        this.gameSelect = option.value; */


        let btnDiv = document.getElementById("btnDiv");
        this.btn = document.createElement("button");
        this.btn.innerHTML = "Next";

        //lägger skapade element i div:en så de syns på sidan
        div.appendChild(name_q).after(name_input); 
        div.appendChild(game_q).after(game_input);
        btnDiv.appendChild(this.btn);

        this.game;
        this.player;
        this.i = 1;

        //När knappen trycks startas spelet
        this.btn.addEventListener("click", function(e){
            self.start(game_input.value);
        });
    }
    
    start(gameValue){
        
        //startar ett nytt spel ifall det inte redan finns ett
        if (this.game==null){ 
            //sparar spelarens namn i localStorage
            localStorage.setItem("name_input", this.nameInput);
            
            this.player = new Player(this.nameInput); //om man byter namn i ett spel ändras inte local storage
            this.game = new Game(gameValue, this.player);
        }

        //fortsätter spelet tills önskat antal frågor är besvarade
        if(this.i<=gameValue){
            this.game.playerAnswers();
            this.game.getQuestion(this.i);
            this.i++
            
            //rensar div:en så sidan blir tom inför nästa fråga, förutom knappen som har en egen div
            div.innerHTML = "";
        }

        //avslutar spelet
        else if(this.i>gameValue){
            div.innerHTML = "Game over"
            let endscreen = document.createElement("p");
            endscreen.innerHTML = this.player.name + " got " + this.player.points + " points"
            div.appendChild(endscreen);
            this.btn.innerHTML = "Play again?"
            this.btn.addEventListener("click", function(e){
                btnDiv.innerHTML = "";
                div.innerHTML ="";
                
                let start = new startNewGame();
            });
        }
    }
}