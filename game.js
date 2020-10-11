class Game{
    constructor(number_of_rounds, player){
        this.rounds = number_of_rounds;
        this.player = player;
        this.question;
    } 
    async getQuestion(i){
        await fetch("https://quizapi.io/api/v1/questions?apiKey=lAbxxIyZH7KpJEH70P6eGGbueQmlZ4KHdQsk7BVV&limit=1")
        .then(response => response.json())
        .then(result => { //result = vårt api-svar i objektformat
            this.question = new Question(result, i);
        }) 
    }
    playerAnswers(){
        if(this.question!=undefined){
            let correctAnswers_arr = Object.values(this.question.question[0].correct_answers) 
            let playerAnswers_arr = Array(6);

            for(let i = 0; i<correctAnswers_arr.length; i++){
                let checkboxes = document.getElementById(i); //HTML-collection
                if(checkboxes!=null){
                    playerAnswers_arr[i]=checkboxes.checked;
                }
            }
            this.correct(correctAnswers_arr, playerAnswers_arr);
        }
    }
    correct(answersArray, playerArray){
        let playerArr = playerArray;
        let answersArr = answersArray;
        if(playerArr.indexOf(true)===answersArr.indexOf("true")){
            this.player.points++;
        }
    }
}