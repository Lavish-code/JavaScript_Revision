// objects literals

// ways to creat eobject
// 1
// Object.create

// 2 
//by defalut name is processed as string , value can be anything

const mysymbol = Symbol("Key1")
const mysymbol2 = Symbol("Key2")
//symbol is not added directly into objets by this method 
//typeof mysymbol will give string in the objects
// the correct syntax is to add using square braces

const jsUser = {
    name: "Ayush",
    "last name": "Yadav",                    //if space is ther we can't access with dot notation
    mysymbol: "mykey1",
    [mysymbol2]: "mykey2",
    age: 21,
    location: "Lucknow",
    email: "yayush059@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(jsUser["last name"])
// console.log(jsUser["email"])
// console.log(jsUser["last name"])
// console.log(jsUser["mysymbol"])
// console.log(jsUser.mysymbol2)             //objects should not be accessed like this
// console.log(jsUser[mysymbol2])             // correct way of accessing obj
console.log(typeof jsUser[mysymbol2])

//how to change values in objects
jsUser.email = "ayush@chatgpt.com"
// console.log(jsUser["email"])

//freeze values / or lock values. it is done on objets
//Object.freeze(jsUser)
jsUser.location = "Raebareli"
// console.log(jsUser)

// jsUser.greeting = function(){
//     console.log("Hello JS User")
// }

// jsUser.greeting2 = function(){
//     console.log(`Hello JS User, ${this.name}`)
// }

// console.log(jsUser.greeting())
// console.log(jsUser.greeting2())