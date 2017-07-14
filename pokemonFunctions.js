
// Write a function called randLetter() that returns a random letter from the 26 letter alphabet

var alphaLetter = ("a", "b", "c","d", "e","f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p","q","r","s","t","u", "v", "w", "x", "y", "z");

function rand (num) {
    var randDec =   Math.random() * num;
    var randInt = Math.floor(randDec);
    var letterPick = randInt;
    console.log(randInt);
    return randInt;
}

// function randLetter () {
//     var randInt = rand(26);
//     var  letter = alphaLetter[randInt];
//     console.log(letter)
//     return letter;
// }
// randLetter();

// // Write a function called randWord() that returns a string of random length of random letters
// function randWord () {
//     var randWord = "";
//     var wordLength = (7);
    
//     for  (var i= 0; i<7; i++);
//     word = randLetter() + word;
//     console.log(word);
// return word

// }
   
// //Write a function called randSentence() that returns a string of a random number of random words separated by a space and ending with a period. The first letter should be capitalized.


// function randSentence (){
//     var randSentence = "";
//     var wordLength = rand(7);

//     for ( var i = 0; i <rand(7); i++);
//     sentence = randWord() + sentence;
//     console.log (sentence);
//     return word
// }