class Game{
    //skapar ett nytt spel, hanterar frågor och svar

    constructor(number_of_rounds, player){
        this.rounds = number_of_rounds;
        this.player = player;
        this.question;

        this.questions_arr = [];
        this.answers_arr = [];
        this.correct_answers_arr = [];
    } 
    async getQuestion(i){
        //skapar nya frågor från fetch

        await fetch("https://quizapi.io/api/v1/questions?apiKey=lAbxxIyZH7KpJEH70P6eGGbueQmlZ4KHdQsk7BVV&limit=1")
        .then(response => response.json())
        .then(result => { //result = vårt api-svar i objektformat
            this.question = new Question(result, i);
        }) 
    }
    playerAnswers(){
        //lägger in spelarens svar i en array, så man kan rätta svaren i correct
        if(this.question!=undefined){ //första gången detta anropas har ingen fråga skrivits ut än
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
        //jämför spelarens svar med de rätta svaren

        let result = this.question.question[0];
        let playerArr = playerArray;
        let answersArr = answersArray;
        
        this.questions_arr.push(result.question);
        this.correct_answers_arr.push(Object.values(result.answers)[answersArr.indexOf("true")]);
        this.answers_arr.push(Object.values(result.answers)[playerArr.indexOf(true)]);
           

        //Om det finns flera korrekta svar så jämförs svarsarrayerna, om de är lika så får spelaren poäng
        if(result.multiple_correct_answers ==="true"){
            let newAnsArr = [];
             answersArr.filter((curr_value, index) => {
                if(curr_value === "true"){
                    newAnsArr.push(index);
                }
            })
            let newPlayArr = [];
             playerArr.filter((curr_value, index) => {
                if(curr_value === true){
                    newPlayArr.push(index);
                }
            })
            if(JSON.stringify(newAnsArr)==JSON.stringify(newPlayArr)){ //finns det bättre sätt?
                this.player.points++;
            }

            
        }

        //om det finns ett rätt svar så jämförs indexen av spelarens svar och det rätta svaret
        else{
            if(playerArr.indexOf(true)===answersArr.indexOf("true")){
                this.player.points++;
            }
        }
    }
    showResult(){
        this.question.printResult(this.questions_arr, this.answers_arr, this.correct_answers_arr);
    }
}