document.addEventListener("DOMContentLoaded", function(e) {

    let div = document.getElementById("div"); //skapar startsidan där spelare får mata in namn och antal spel
    let name_q = document.createElement("p");
    name_q.innerHTML = "Skriv in ditt namn";
    let name_input = document.createElement("input");
    let game_q = document.createElement("p");
    game_q.innerHTML = "Välj hur många spel";
    let game_input = document.createElement("input");
    let startBtn = document.createElement("button");
    startBtn.innerHTML = "Start";

    div.appendChild(name_q).after(name_input); //lägger skapade element i div:en så de syns på sidan
    div.appendChild(game_q).after(game_input);
    div.appendChild(startBtn);

    startBtn.addEventListener("click", function(e){
        div.innerHTML=""; //rensar diven på alla children från tidigare
        let player = new Player(name_input.value);
        
        let p = document.createElement("p");
        p.innerHTML = "Spelare: " + player.name;
        div.appendChild(p);

        fetch('https://quizapi.io/api/v1/questions?apiKey=lAbxxIyZH7KpJEH70P6eGGbueQmlZ4KHdQsk7BVV&limit=10')
        .then(response => response.json())
        .then(result => {
            new Game(result, game_input.value);
            
        });

    })

}); 