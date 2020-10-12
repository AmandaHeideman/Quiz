class Question{
    //skapar en ny fråga, skriver ut dem på sidan

    constructor(result, i){
        this.question = result;
        this.printQuestion(result[0], i);
    }
    
    printQuestion(result, i){
        //skriver ut frågor och svarsalternativ på sidan

        let div = document.getElementById("div");
        let question_number = document.createElement("h3");
        let question_field = document.createElement("p");
        let answer_list = document.createElement("ul");
        
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
        div.appendChild(question_number);
        div.appendChild(question_field).after(answer_list);
    }
    
}
