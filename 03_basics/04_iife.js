//Immediately invoked function expression (IIFE)
//function which is executed immediately

//Global scope ke pollution se problem hooti hai kai baar to usse bachne ke liye hum iife use karte hai 
//()()
(function chai(){
    //this is name IIFE
    console.log("DB CONNECTED")
})();
//always remember to end the iife 


///in arrow function
((name) => {
    //UNNAMED IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})("chai");