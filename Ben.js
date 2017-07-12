console.log ("Ben is awesome");
console.log ("Hello world");

function rand(num) {
    //you  already know what time it is
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    console.log (randInt);
    return randInt;
}
rand(50);