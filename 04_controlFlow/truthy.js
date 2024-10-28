const email = "yayush@yadav.com" //if we dont give user email it will go to else part
if(email){
    console.log("got user email")
}
else{
    console.log("don't have user email")
}


const email1 = []
if(email1){
    console.log("got user email")
}
else{
    console.log("don't have user email")
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy values
// "0", 'false' "false", " ", []//empty array, {} empty object, function() {}


// HOw to check if object is empty
const emptyObj = {}

// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty")
// }

// console.log(false==0)
// console.log(false=="")
// console.log(0=="")



//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5??10
// val1 = null ?? 20   //safety check hooga agr null hai to 20 aa jayega
// val1 = undefined ?? 15                //15
// val1=null??undefined??10          // 10
// console.log(val1)


//terniary operaor

// condition ? true : false

const price = 69
price >= 70 ? console.log("greater") : console.log("less");
