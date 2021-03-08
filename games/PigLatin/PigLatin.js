'use strict';

let convertBtn = document.getElementById('convertBtn');
let userInput = document.getElementById('userInput');
//array variable to represent and add each new piglatin word to that we will eventually return
let pigLatinArr = [];
pigLatinArr.length = 0;

let translate = (english) => {
    //code that will run to translate each individual word
    english.forEach(wrd => {
        console.log(wrd);
        let firstPart;
        let restOfWord;

        // regex to find the vowel position is so much easier
        let vowelPos = wrd.search(/['a' 'e' 'i' 'o' 'u' 'y' 'A' 'E' 'I' 'O' 'U' 'Y']/);
        console.log(vowelPos);

        if(wrd[0] === 'y'){
            // if the first letter is specifically a y
            firstPart = wrd.substring(0, 1);
            restOfWord = wrd.substring(1);
            vowelPos = restOfWord.search(/['a' 'e' 'i' 'o' 'u' 'y' 'A' 'E' 'I' 'O' 'U' 'Y']/);
            firstPart = firstPart + restOfWord.substring(0, vowelPos);
            restOfWord = restOfWord.substring(vowelPos);
            pigLatinArr.push(restOfWord + firstPart + "ay");
        }
        else if(vowelPos === 0){
            //if the first letter is a vowel
            pigLatinArr.push(wrd+"way");
        }
        else if (vowelPos === -1) {
            //if there are no vowels
            pigLatinArr.push(wrd+"ay");
        }
        else{
            firstPart = wrd.substring(0, vowelPos);
            restOfWord = wrd.substring(vowelPos);
            pigLatinArr.push(restOfWord + firstPart +"ay");
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