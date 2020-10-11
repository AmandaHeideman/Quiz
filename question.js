class Question{
    constructor(i){
        this.questions_arr = []; 

        this.getQuestion(i);

        /* for (let j = 0; j<i; j++){
            console.log(this.questions_arr[0]);
            this.printQuestion(this.questions_arr[j]);
        } */
        
    }
    async getQuestion(i){
        await fetch("https://quizapi.io/api/v1/questions?apiKey=lAbxxIyZH7KpJEH70P6eGGbueQmlZ4KHdQsk7BVV&limit="+i)
        .then(response => response.json())
        .then(result => { //result = vårt api-svar i objektformat
           for(let j=0; j<i; j++){
                this.questions_arr.push(result[j])

                this.printQuestion(result[j], j);
            }
        })
    }
    printQuestion(result, j){
        //skriver ut frågor och svarsalternativ på sidan

        let div = document.getElementById("div");
        let question_field = document.createElement("p");
        let answer_list = document.createElement("ul");
        
        let answers_arr = Object.values(result.answers); 
        question_field.innerHTML = result.question;
        let i = 0;
        for (let element of answers_arr){   //lägger till alla svarsalternativ i en lista
            if(element!=null){
                let a_list_item = document.createElement("li");
                let a_checkbox = document.createElement("input");
                
                a_list_item.innerHTML = element;
                a_list_item.className = "listItem";
                a_list_item.name = result.id;
                
                a_checkbox.type = "radio";
                a_checkbox.className = "check", j;
                a_checkbox.name = result.id;
                a_checkbox.number = j;
                a_checkbox.id = i;
                
                answer_list.appendChild(a_checkbox).after(a_list_item);
                i++;
            }
        }

        div.appendChild(question_field).after(answer_list);
        
    }
    click(){
        for(let i=0; i<this.questions_arr.length; i++){
            //console.log(this.questions_arr[i].answers);
            let answers = document.getElementById(i);
            console.log(this.questions_arr[i]);
            console.log(answers);
            console.log(answers.checked);
        }
    }
}
