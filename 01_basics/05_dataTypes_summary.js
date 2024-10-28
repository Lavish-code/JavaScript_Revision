//    PRIMITIVE DATA types
//    7 types : String, Number, Boolean, null, undefined, Symbol, BIGInt

// js is dynamic langauge coz there is no need define the type of the varibles


// Reference (Non primitive)
// Array, obejtcs, functions
const score = 100
const scoreValue = 100.3

const loggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')                   //typeof -> Symbol
const userId = Symbol('123')               //typeof -> Symbol
// console.log(id==userId)                 //false
// console.log(id===userId)                //false


const BIGnum = 54123654125896569855n
console.log(typeof BIGnum)               //bigint

const heros = ["shaktiman", "naagraaj", "doga"]
let myObj ={
    name: "Ayush",
    age: 22,
}

console.log(heros)
console.log(myObj)

const myFun = function(){
    console.log("Hello World")         //typeof for function will give function
}
// console.log(myFun)                   //[Function: myFun]
// console.log(typeof myFun)              //function

/****************    SUMMARY   ******************/
/*  typeof
    null       -> object
    undefined  -> undefined
    boolean    -> boolean
    number     -> number
    string     -> string
    function   -> function
    symbol     -> symbol
    biginteger -> bigint

*/

/////////////////////////////////////////////////////////////////////
// types of memory.
// Stack (primitive)  , Heap (non-primitive)

// from stack we get copy 
// from heap we get reference

