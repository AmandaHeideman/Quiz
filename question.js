class Question{
    constructor(result, rounds){
        this.question = result;
        this.printQuestion(result[0]);
    }
    
    printQuestion(result){
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
                a_checkbox.className = "check";
                a_checkbox.name = result.id;
                a_checkbox.id = i;

                answer_list.appendChild(a_checkbox).after(a_list_item);
                i++;
            }
        }
        
        div.appendChild(question_field).after(answer_list);
    }
}
