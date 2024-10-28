const accountId = 45621   // const can't be changed
let accountEmail = "yayush059@gamail.com"   // can be changed
var accountPass = "123456"             // can be changed
accountCity = "Lucknow"
let accountState;


//use only const and let.

//accountId = 55  we can not change const 

/*
prefer not to use var because of issue in block scope and functional scope
*/
accountEmail = "suyashk@google.com"
accountPass = "5421"
accountCity = "Raebareli"

console.log(accountId);
console.log(accountEmail);
console.log(accountPass);
console.log(accountCity);

console.table([accountEmail,accountId,accountPass,accountCity,accountState]);