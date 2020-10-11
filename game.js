class Game{
    constructor(number_of_rounds, player){
        this.rounds = number_of_rounds;
        this.player = player;
        this.question;
    } 
    async getQuestion(){
        await fetch("https://quizapi.io/api/v1/questions?apiKey=lAbxxIyZH7KpJEH70P6eGGbueQmlZ4KHdQsk7BVV&limit=1")
        .then(response => response.json())
        .then(result => { //result = vårt api-svar i objektformat
            this.question = new Question(result);
        }) 
        console.log(this.question);
    }
    playerAnswers(){
        if(this.question!=undefined){
            
            let answers_arr = this.question.question[0].correct_answers
            console.log(answers_arr);

            
            for(let i = 0; i<6; i++){
                let checkboxes = document.getElementById(i); //HTML-collection

                if(checkboxes.checked){ 
                    console.log("checked");
                }
                else if(!checkboxes.checked){
                    console.log("not checked");
                }
            }
        }
    }
    correct(){

        /* PLAN:
        playerArray = [true, false, false];
        answersArray = [true, false, false];

        for(let i = 0; i<playerArray.length; i++){
            if(playerArray[i] && answersArray[i]){
                //poäng
            }
        } */
    }
}