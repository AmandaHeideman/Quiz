class Game{
    constructor(number_of_rounds, player){
        this.rounds = number_of_rounds;
        this.player = player;

        let questions = new Question(this.rounds);
        
        let div = document.getElementById("div");
        let saveBtn = document.createElement("button");
        saveBtn.innerHTML = "Save";
        div.appendChild(saveBtn);
        
        saveBtn.addEventListener("click", function(e){
            questions.click();
        })
    } 
    
}