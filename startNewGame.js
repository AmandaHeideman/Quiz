class startNewGame{
    constructor(){
        var self = this;
       //skapar startsidan där spelare får mata in namn och antal spel
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
        game_input.value = 5;
        this.gameInput = game_input.value;

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
        this.btn.addEventListener("click", function(e){
            self.start()
        });
    }
    
    start(){
        
        //startar ett nytt spel ifall det inte redan finns ett
        if (this.game==null){ 
            //sparar spelarens namn i localStorage
            localStorage.setItem("name_input", this.nameInput);
            
            this.player = new Player(this.nameInput);
            this.game = new Game(this.gameInput, this.player);
        }
        if(this.i<=this.gameInput){
            this.game.playerAnswers();
            this.game.getQuestion(this.i);
            this.i++
            
            //rensar div:en så sidan blir tom inför nästa fråga, förutom knappen som har en egen div
            div.innerHTML = "";
        }
        else if(this.i>this.gameInput){
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