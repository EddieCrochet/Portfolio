'use strict';

let convertBtn = document.getElementById('convertBtn');
let userInput = document.getElementById('userInput');

convertBtn.addEventListener('click', function(){
    let englishStr = userInput.value.trim();
    //get entire user's input from the textbox as one long string

    let englishArr = englishStr.split(" ");
    //split the english string into an array of the words

    //code that will rn to translate each individual word
    englishArr.forEach(wrd => {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 
        'A', 'E', 'I', 'O', 'U', 'Y'];
        let firstPart;
        let restOfWord;
        let vowelPos;

        for(let i = 0; i < vowels.length; i++){
            vowelPos = wrd.indexOf(vowels[i]);
            //get in here to get access to the index of the first value of each word
            if(vowelPos !== -1){
                console.log(vowelPos);
            }
        }
    });
});