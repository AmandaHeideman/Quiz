class Question{
    //skapar en ny fråga, skriver ut dem på sidan

    constructor(result, i){
        this.question = result;
        this.printQuestion(result[0], i);
    }
    
    printQuestion(result, i){
        //skriver ut frågor och svarsalternativ på sidan

        let div = document.getElementById("div");
        let questions_div = document.createElement("div");
        let question_number_div = document.createElement("div");
        let question_number = document.createElement("h3");
        let question_field = document.createElement("p");
        let answer_list = document.createElement("ul");
        
        questions_div.id = "q_div";
        question_number_div.id = "q_num_div";

        question_number.innerHTML = "Question " + i;
        question_field.innerText = result.question;
        let answers_arr = Object.values(result.answers); 
        let j = 0;

        //lägger till alla svarsalternativ i en lista
        for (let element of answers_arr){   
            if(element!=null){
                let a_list_item = document.createElement("li");
                let a_checkbox = document.createElement("input");
                
                a_list_item.innerText = element;
                a_list_item.className = "listItem";
                a_list_item.name = result.id;
                
                if (result.multiple_correct_answers ==="true"){
                    a_checkbox.type = "checkbox";
                }
                else if(result.multiple_correct_answers ==="false"){
                    a_checkbox.type = "radio";
                    a_checkbox.className = "check";
                }

                a_checkbox.name = result.id;
                a_checkbox.id = j;

                answer_list.appendChild(a_checkbox).after(a_list_item);
                j++;
            }
        }
        div.appendChild(question_number_div).after(questions_div);
        question_number_div.appendChild(question_number);
        questions_div.appendChild(question_field).after(answer_list);
    }
    
    printResult(questions, answers, correct_answers){
        let div = document.getElementById("endscreen");

        for(let i = 0; i<questions.length; i++){
            let q_number = document.createElement("p");
            q_number.className = "q_number";
            q_number.innerHTML = "Question " + (i+1);

            let q = document.createElement("p");
            q.innerHTML = questions[i];

            let a = document.createElement("span");
            let a1 = document.createElement("span");
            a1.className = "italic";
            a1.innerHTML = "Your answer: ";
            let a2 = document.createElement("p");
            a2.innerHTML = answers[i];
            a.appendChild(a1).after(a2);

            let corr_a = document.createElement("span");
            let corr_a1 = document.createElement("span");
            corr_a1.className = "italic";
            corr_a1.innerHTML = "Correct answer: ";
            let corr_a2 = document.createElement("p");
            corr_a2.innerHTML = correct_answers[i];
            corr_a.appendChild(corr_a1).after(corr_a2);

            div.appendChild(q_number);
            div.appendChild(q);
            div.appendChild(a);
            div.append(corr_a);
        }
    }
}
