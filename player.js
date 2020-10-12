class Player{
    //skapar en ny spelare, håller reda på spelarens namn oh poäng
    
    constructor(name){
        this.name = name;
        this.points = 0;

        this.welcomeName();
    }
    welcomeName(){
        let div = document.getElementById("div"); 
        let welcome = document.createElement("p");
        welcome.innerHTML = "Welcome, " + this.name + "!";
        div.appendChild(welcome);
    }
}