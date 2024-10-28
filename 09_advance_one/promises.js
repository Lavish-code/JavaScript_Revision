//A Promise is a special JavaScript object. It produces a value after an asynchronous (aka, async) operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.
//promise have 2 parts resolve and reject
const promise1 = new Promise(function(resolve,reject){
    //do async tasks
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)
})

promise1.then(function(){
    console.log('promise complete')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('task 2 resolved')
})

const promise3 = new Promise(function(resolve,reject){
    resolve({username: "chai", email: "chai@example.com"})                   //resolve mein object jaata hai
},3000)
promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Ayush", email: "yayush059@gmail.com"})
        }
        else{
            reject('ERROR: Something went wrong.')
        }
    },1000)
})
promise4.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('Promise is either resolved or rejected')
})


const promise5 = new Promise(function(resolve,reject){
    let error = true
    if(!error){
        resolve({username: "javascript", password: "12345"})
    }
    else{
        reject("ERROR: javascript went wrong")
    }
},1000)

async function consumePromise5() {
    try {
        const respose = await promise5
        console.log(respose)
    } catch (error) {
        console.log(error)
    }
}
consumePromise5()

//we can use any of the promise4 / or promise5 both are same with dif syntax

// fetching data 

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } 
//     catch (error) {
//         console.log('E:', error)
//     }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))


//important
//error 404 comes from response not from reject