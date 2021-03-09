'use strict';

let convertBtn = document.getElementById('convertBtn');
let userInput = document.getElementById('userInput');
//array variable to represent and add each new piglatin word to that we will eventually return
let pigLatinArr = [];
pigLatinArr.length = 0;

let translate = (english) => {
    //code that will run to translate each individual word
    english.forEach(word => {
        //only convert to lowercase, we will change first letter to capital later on
        let wrd = word.toLowerCase();
        console.log(wrd);
        let firstPart;
        let restOfWord;
        let lastLetter = wrd[wrd.length-1];
        let nonLetters = [];
        
        // removes non letters from the END of the word and THEN runs the translation
        if(lastLetter>'z' || lastLetter<'a'){
            let charToRemove = wrd.slice(wrd.length-1);
            console.log(wrd);
            //puts non letter in designated array
            nonLetters.push(charToRemove);
            //actually removes non letter from original word for storage
            wrd = wrd.replace(charToRemove, "");
            console.log(wrd);
        }

        // regex to find the vowel position is so much easier
        let vowelPos = wrd.search(/['a' 'e' 'i' 'o' 'u' 'y' 'A' 'E' 'I' 'O' 'U' 'Y']/);
    
        if(wrd[0] === 'y'){
            // if the first letter is specifically a y
            firstPart = wrd.substring(0, 1);
            restOfWord = wrd.substring(1);
            vowelPos = restOfWord.search(/['a' 'e' 'i' 'o' 'u' 'y' 'A' 'E' 'I' 'O' 'U' 'Y']/);
            firstPart = firstPart + restOfWord.substring(0, vowelPos);
            restOfWord = restOfWord.substring(vowelPos);
            pigLatinArr.push(restOfWord + firstPart + "ay"+nonLetters);
        }
        else if(vowelPos === 0){
            //if the first letter is a vowel
            pigLatinArr.push(wrd+"way"+nonLetters);
        }
        else if (vowelPos === -1) {
            //if there are no vowels
            pigLatinArr.push(wrd+"ay"+nonLetters);
        }
        else{
            firstPart = wrd.substring(0, vowelPos);
            restOfWord = wrd.substring(vowelPos);
            pigLatinArr.push(restOfWord + firstPart +"ay"+nonLetters);
        }
    });
    console.log(pigLatinArr);
};

convertBtn.addEventListener('click', function(){
    let englishStr = userInput.value.trim();
    //get entire user's input from the textbox as one long string sans spaces arpound

    let englishArr = englishStr.split(" ");
    //split the english string into an array of the words

    // call the function that will actually translate
    translate(englishArr);
});