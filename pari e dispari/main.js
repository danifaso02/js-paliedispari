"use: strict";

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Funzione per decretare il vincitore
function winner(num1, num2){

    let sum = num1 + num2;

    if(sum % 2 === 0 && userChoice === "Pari"){
        alert("Hai vinto!");
    }
    
    else if(sum % 2 === 1 && userChoice === "Pari"){
        alert("Hai perso!");
    }
    
    else if(sum % 2 === 1 && userChoice === "Dispari"){
        alert("Hai vinto!");
    }
    
    else if(sum % 2 === 0 && userChoice === "Dispari"){
        alert("Hai perso!");
    }
}


// Utente sceglie pari o dispari
let userChoice = prompt("Scegli Pari o Dispari?");

while(!isNaN(userChoice)){
    userChoice = prompt("Puoi inserire solo lettere!");
};

// Utente mette numero da 1 a 5
let userNumber = Number(prompt("Ora scegli un numero da 1 a 5!"));

while(userNumber <= 0 || userNumber > 5){
    userNumber = Number(prompt("Il numero deve essere compreso tra 1 e 5!"));
}

// Numero random bot
let botNumber = Math.floor(Math.random() * 5) + 1;

// Il vincitore è
winner(userNumber, botNumber);