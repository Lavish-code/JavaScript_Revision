const user = {
    username: "ayush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// // if we change username now
// user.username = "sam";
// user.welcomeMessage()

// console.log(this)

//global object in browser is window object. 


function chai(){
    let username = "ayush"
    console.log(this.username)
}
// chai()

const chai1 = function(){
    let username = "ayush"
    console.log(this.username)
}
// chai1()

//arrow function
const chai2 = () => {
    let username = "ayush"
    console.log(this)
}
// chai2()


const addTwo = (num1,num2) => {
    return num1+num2
}
// console.log(addTwo(4,5))


//implicit return
const multiply = (num1,num2) => num1 * num2
console.log(multiply(4,5))

// OR
const div = (num1,num2) => (num1 / num2)
console.log(div(10,5))


//returning object from function needs to be wrapped inside braces
const func1 = () => {username: "ayush"}
// console.log(func1())                      //this will give undefines

const func2 = () => ({username: "ayush"})
console.log(func2()) 
