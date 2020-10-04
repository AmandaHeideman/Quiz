class Game{
    constructor(number_of_rounds = 10, player){
        this.rounds = number_of_rounds;
        this.player = player;

        for( let i = 0; i<this.rounds; i++){
            this.getQuestion(i);
        }
        
    }
    getQuestion(i){
        fetch("https://quizapi.io/api/v1/questions?apiKey=lAbxxIyZH7KpJEH70P6eGGbueQmlZ4KHdQsk7BVV")
        .then(response => response.json())
        .then(result => {
            let question = new Question(result, i)
        }
        )
    }
}