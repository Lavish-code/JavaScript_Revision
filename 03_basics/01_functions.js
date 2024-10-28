function sayMyName(){
    console.log("A")
    console.log("Y")
    console.log("U")
    console.log("S")
    console.log("H")
}

// sayMyName()

function addTwoNum(number1, number2){
    console.log(number1+number2)
}
// const result = addTwoNum(5,3)
// console.log(result)                         //this will give undefined coz we didnt define the return type of function

function addTwoNum(number1, number2){
    let result = number1+number2
    return result
}
const result1 = addTwoNum(5,3)
// console.log("result:", result1)


function loginUserMessage(username = "sam"){               //(username = sam) will give sam if we dont pass anything in the function
    if(!username){
        return console.log("please enter a username")
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())


function calculateCartPrice(num1, num2, ...num3){
    return num3
}
// console.log(calculateCartPrice(100,50,200,600))


//handle objects in function
const user = {
    name: "ayush",
    age: 21
}

function handleObject(anyobj){
    console.log(`Username is ${anyobj.name} and his age is ${anyobj.age}`)
}
handleObject(user);

//we can directly pass user objectinto function
handleObject({
    name: "piyus",
    age: 19
});

function secondValue(arr){
    return arr[1]
}
const array = [5,4,8,3,1]
console.log(secondValue(array));



