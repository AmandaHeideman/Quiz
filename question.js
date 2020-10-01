class Question{
    constructor(result){
        this.q = result.question; //result[0].question är string
        this.a = result.answers; //result[0].answers är object
        /* console.log(this.q); //result är JSON / object
        console.log(typeof result[0].answers); */
    }
}
