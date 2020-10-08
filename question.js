class Question{
    constructor(i){
        //this.question = []; //används inte i nuläget
        this.getQuestion(i);
        //this.printQuestion();
        
    }
    getQuestion(i){
        fetch("https://quizapi.io/api/v1/questions?apiKey=lAbxxIyZH7KpJEH70P6eGGbueQmlZ4KHdQsk7BVV&limit="+i)
        .then(response => response.json())
        .then(result => { //result = vårt api-svar i objektformat
            for(let j=0; j<i; j++){
                //this.question.push(result[j]);
                this.printQuestion(result[j]);
            }
        })
        
    }
    printQuestion(result){
        //skriver ut frågor och svarsalternativ på sidan

        let div = document.getElementById("div");
        let question_field = document.createElement("p");
        let answer_list = document.createElement("ol");
        
        let answers_arr = Object.values(result.answers); 
        question_field.innerHTML = result.question;

        for (let element of answers_arr){   //lägger till alla svarsalternativ i en lista
            if(element!=null){
                let a = document.createElement("li");
                a.innerHTML = element;
                answer_list.appendChild(a);
            }
        }

        div.appendChild(question_field).after(answer_list);
        
    }
}
