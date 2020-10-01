class Game{
    constructor(result, number_of_rounds){
        this.rounds = number_of_rounds;
        this.questions_json = result;
        this.writeQuestion(this.questions_json);
        
        let question_box = document.createElement("p");
        question_box.innerHTML = this.questions_json[0].question;

        let answer_box = document.createElement("ol");
        let answers = this.questions_json[0].answers;
        let answers_arr = Object.values(answers);   
      
        for (let element of answers_arr){   //lägger till alla svarsalternativ i en lista
            if(element!=null){
                let a = document.createElement("li");
                a.innerHTML = element;
                answer_box.appendChild(a);
            }
        }
        let div = document.getElementById("div");
        let btn = document.createElement("button");
        btn.innerHTML = "nästa";
        div.appendChild(question_box);
        div.appendChild(answer_box).after(btn);

        /*let i = 0;
        let q = "placeholder";
        btn.addEventListener("click", this.nextQuestion(i)); //problem med att kalla på metod
        question_box.innerHTML = q; //får inget nytt värde */

    }

    writeQuestion(questions){

    }
    /* nextQuestion(i){
        console.log(this.questions_json[i].question); //varför undefined???
            let q = this.questions_json[i].question;
            i++;
            return q;
            //question_box.innerHTML += this.questions_json[0].answers;
    
        
    } */
}