class Question{
    constructor(result, i=0){
        this.q = result[i].question;    // result.question; //result[0].question är string
        this.a = result[i].answers;   //result.answers; //result[0].answers är object
        console.log(this.q);
        console.log(typeof this.q);
        console.log(this.a);
        console.log(typeof this.a);
    }
    
}
