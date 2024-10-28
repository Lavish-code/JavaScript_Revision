// dom manipulation
// document.getElementById('firstHeading')
// document.getElementById('firstHeading').innerHTML="<h1>chai aur code</h1>"
// to change the elemnt in the web page

// changing color of h2 in any page

// document.querySelectorAll('.mw-heading')
// const allmwheading = document.querySelectorAll('.mw-heading')
// allmwheading.forEach(function(h){
//     h.style.color="red"
// )

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
  
// Example usage:
// const result = add(1)(2)(3);
// console.log(result); // Outputs: 6


//CONVERTING OBJECT TO STRING
// const myObj2 = {
//     name:"ayush",
//     age:24
// }
// const strObj = JSON.stringify(myObj2)
// console.log(strObj)                                  // "name":"ayush","age":24}
// console.log(typeof strObj)                        //  string

