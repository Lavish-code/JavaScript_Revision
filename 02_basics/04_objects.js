const tinderUser = new Object()     //singleton object
// console.log(tinderUser)

//METHOD1
const tinderUser1 = {
    name:"Ayush Yadav",
    Age: 21,
    city: "Raebareli"
}
// console.log(tinderUser1)


//METHOD2
const tinderUser2 = {}
tinderUser2.name= "Ayush"
tinderUser2.age= 19
tinderUser2.city= "Raebareli"
console.log(tinderUser2)

const users = {
    email: "ayush@google.com",
    fullname: {
        user1 : {
            firstname: "Ayush",
            lastname: "Yadav"
        }
    },
    city: "Raebareli"
}
// console.log(users)
// console.log(users.fullname.user1)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 2: "d"}
const obj4 = {5: "e", 5: "f"}

const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)
// console.log({...obj1,...obj2})


//objects in array

const user = [
    {
        id: 1,
        email: "ayush@gmail.com"
    },
    {
        id: 2,
        email: "suyash@gmail.com"
    }
]
// console.log(user);
// console.log(tinderUser1);


//KEYS AND VALUES
// console.log(Object.keys(tinderUser1))
// console.log(Object.values(tinderUser1))
// console.log(Object.entries(tinderUser1))
// console.log(Object.entries(tinderUser1))
// console.log(tinderUser1.hasOwnProperty('city'));


//When we have to print any value more than once , 
//we need to type long syntax many times, we can shorten the syntax
//this is known as destructure
const course = {
    coursename: "js in hindi",
    price: 999,
    courseinstructor: "Hitesh"
}

const {courseinstructor} = course
// console.log(courseinstructor)

const {courseinstructor: instructor} = course           // we can name it by our own
// console.log(instructor)


//JSON FILE FORMAT
// {
//     "name": "ayush",
//     "age": 21,
//     "city": "Raebareli"
// }

