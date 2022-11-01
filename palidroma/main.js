"use: strict";

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt("Inserisci una parola per verificare se è palindroma!");

let finalWord = "";

function isPalindrome(word){

    for (let i = userWord.length - 1; i >= 0; i--) {
        finalWord += userWord[i];
    }
    
    if(userWord === finalWord){
        alert("La parola è palindroma!");
    }
    
    else{
        alert("La parola non è palindroma!");
    }

}

isPalindrome(userWord);