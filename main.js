document.addEventListener("DOMContentLoaded", function(e) {

    //skapar startsidan där spelare får mata in namn och antal spel
    let div = document.getElementById("div"); 
    let name_q = document.createElement("p");
    name_q.innerHTML = "Skriv in ditt namn";
    let name_input = document.createElement("input");

    let storeName = localStorage.getItem("name_input")
    name_input.value = storeName;

    let game_q = document.createElement("p");
    game_q.innerHTML = "Välj hur många spel";
    let game_input = document.createElement("input");
    let startBtn = document.createElement("button");
    startBtn.innerHTML = "Start";

    //lägger skapade element i div:en så de syns på sidan
    div.appendChild(name_q).after(name_input); 
    div.appendChild(game_q).after(game_input);
    div.appendChild(startBtn);

    startBtn.addEventListener("click", function(e){
        //sparar spelarens namn i localStorage
        localStorage.setItem("name_input", name_input.value);

        //rensar div:en så sidan blir tom
        div.innerHTML=""; 
        let player = new Player(name_input.value);
        let game = new Game(game_input.value, player);
    })
    

}); 