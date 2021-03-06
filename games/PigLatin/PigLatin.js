'use strict';

let convertBtn = document.getElementById('convertBtn');
let resetBtn = document.getElementById('resetBtn');
let userInput = document.getElementById('userInput');
let pig = document.getElementById("piggy");
//array variable to represent and add each new piglatin word to that we will eventually return
let pigLatinArr;
let pigLatinStr;

const init = () => {
    pigLatinArr = [];
    pigLatinStr = "";
    pig.innerHTML="";
};
init();

const translate = (english) => {
    //code that will run to translate each individual word
    english.forEach(word => {
        //only convert to lowercase, we will change first letter to capital later on
        let wrd = word.toLowerCase();
        let firstPart;
        let restOfWord;
        let charToRemove;
        let nonLetters = [];
        
        // removes non letters from the END of the word and THEN runs the translation
        for(let i = 0; i < wrd.length; i++){
            if(wrd[i] >'z' || wrd[i]<'a'){
                charToRemove = wrd[i];
                //I want to keep the hyphen or apostrophe in its original place, if encountered
                if(charToRemove==="'"||charToRemove==="-") continue;
                //puts non letter in designated array
                nonLetters.push(charToRemove);
                //actually removes non letter from original word for storage
                wrd = wrd.replace(charToRemove, "");
            }
        }

        // regex to find the vowel position is so much easier
        let vowelPos = wrd.search(/['a' 'e' 'i' 'o' 'u' 'y' 'A' 'E' 'I' 'O' 'U' 'Y']/);
    
        nonLetters = nonLetters.join();
        console.log(wrd);
        //join all non letters to string and remove the commas
        // REGULAR EXPRESSION in the replace to get it to do not only the first case but every instance of such
        nonLetters = nonLetters.replace(/,/g, '');
        console.log(nonLetters);
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
    // loop over the new array to print a nice organized sentence.
    for(let i = 0; i < pigLatinArr.length; i++){
        // doing this instead of a simpler join keeps the nonletters in the sentence as well as proper spaces
        pigLatinStr += ` ${pigLatinArr[i]}`
    }
    printPig(pigLatinStr);
    console.log(pigLatinArr);
    console.log(pigLatinStr);
};

const printPig = (str) => {
    pig.innerHTML=str;
};

convertBtn.addEventListener('click', function(){
    let englishStr = userInput.value.trim();
    //get entire user's input from the textbox as one long string sans spaces arpound

    let englishArr = englishStr.split(" ");
    //split the english string into an array of the words

    // call the function that will actually translate
    translate(englishArr);
});

//Adding a reset button to reset all the words from the display and the translator,
//in order to accomplish multiple translations...
resetBtn.addEventListener('click', function(){
    init();
});