const bottone = document.querySelector("#play");

bottone.addEventListener("click", function(){

    let startGame = "";
    
    griglia = document.querySelector(".griglia");

    griglia.innerHTML = startGame;


    for(let i = 0; i < 100; i++){
        let cella = document.createElement("div");
        let numero = i+1;
        cella.append(numero);
        cella.classList.add("cella");

        cella.addEventListener("click", 
        function(){
            cella.classList.toggle("colorato");
            console.log("Hai cliccato il : " + cella.textContent);
        });

        griglia.appendChild(cella);
    }
});