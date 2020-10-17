class startNewGame{
    //skapar startsidan där spelare får mata in namn och antal spel
    
    constructor(){ 
        var self = this;
        let div = document.getElementById("div"); 
        let start_div = document.createElement("div");
        start_div.id = "start_div";

        this.welcome = document.createElement("h3");
        this.welcome.innerHTML = "Welcome!"
        this.welcome.id = "welcome";

        let name_q = document.createElement("p");
        name_q.innerHTML = "Enter your name:";
        name_q.className = "start_q";
        let name_input = document.createElement("input");
        name_input.className = "start_input";

        let storeName = localStorage.getItem("name_input")
        name_input.value = storeName;

        let game_q = document.createElement("p");
        game_q.innerHTML = "Enter number of questions:";
        game_q.className = "start_q";
        let game_input = document.createElement("input");
        game_input.className = "start_input";
        game_input.type = "number";
        game_input.min = 5;
        game_input.max = 10;
        game_input.value = 5;

        let btnDiv = document.getElementById("btnDiv");
        this.btn = document.createElement("button");
        this.btn.innerHTML = "Next";

        //lägger skapade element i div:en så de syns på sidan
        div.appendChild(this.welcome).after(start_div);
        start_div.appendChild(name_q).after(name_input); 
        start_div.appendChild(game_q).after(game_input);
        btnDiv.appendChild(this.btn);

        this.game;
        this.player;
        this.i = 1;

        //När knappen trycks startas spelet
        this.btn.addEventListener("click", function(e){
            self.start(game_input.value, name_input.value);
        });
    }
    
    start(gameValue, nameValue){
        
        //startar ett nytt spel ifall det inte redan finns ett
        if (this.game==null){ 

            //sparar spelarens namn i localStorage
            localStorage.setItem("name_input", nameValue); 
            
            this.player = new Player(nameValue); 
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
            this.game.playerAnswers();
            
            div.innerHTML = "";
            let game_over = document.createElement("h3");
            game_over.innerHTML = "Game over";
            game_over.id = "game_over";
            let endscreen = document.createElement("div");
            endscreen.id = "endscreen";
            let endscreen_points = document.createElement("h3");
            endscreen_points.id = "endscreen_points";
            endscreen_points.innerHTML = this.player.name + " got " + this.player.points + " points"
            endscreen.appendChild(endscreen_points);
            div.appendChild(game_over).after(endscreen);

            this.game.showResult();
            
            this.btn.innerHTML = "Play again?"

            //startar ett nytt spel om spelaren trycker på knappen
            this.btn.addEventListener("click", function(e){
                btnDiv.innerHTML = "";
                div.innerHTML ="";
                
                let start = new startNewGame();
            });
        }
    }
}