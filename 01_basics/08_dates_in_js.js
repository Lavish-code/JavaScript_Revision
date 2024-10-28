const myDate = new Date()
console.log(myDate)                    //2024-08-07T16:56:46.547Z
console.log(myDate.toString())         //Wed Aug 07 2024 16:56:46 GMT+0000 (Coordinated Universal Time)
console.log(myDate.getDate())          //7
console.log(myDate.getDay())           //wed -> 3
console.log(myDate.getFullYear())
console.log(myDate.getHours())
console.log(myDate.getMilliseconds())        //USE myDate.toString()
console.log(myDate.getMinutes())
console.log(myDate.getMonth())
console.log(myDate.toTimeString())       //16:56:46 GMT+0000 (Coordinated Universal Time)     
console.log(myDate.toDateString())       //Wed Aug 07 2024
console.log(typeof myDate)               //object

let mycreatedDate = new Date(2023, 13, 23)    // month starts from 0
console.log(mycreatedDate)                    //2024-02-23T00:00:00.000Z
console.log(mycreatedDate.toDateString())     //Fri Feb 23 2024

let mycreatedDate1 = new Date(2023, 5, 25,5,3)   //month from 0
console.log(mycreatedDate1.toLocaleString())     //6/25/2023, 5:03:00 AM
let mycreatedDate2 = new Date("2024-08-5")      //YYYYMMDD,  MMDDYYYY
console.log(mycreatedDate2.toLocaleString())      //8/5/2024, 12:00:00 AM

let mytimestamp = Date.now()                 //now gives in milisecond
console.log(mytimestamp)

let MyCreateDateTimeStamp = mycreatedDate2.getTime()
console.log(MyCreateDateTimeStamp)
console.log(MyCreateDateTimeStamp==mytimestamp)
//THIS IS used in projects to create timestamps to check if the date is after the tive date


//converting to seconds from miliseconds
console.log(Date.now())        // this is in miliseconds
console.log(Date.now()/10000)   // this will give decimal value
console.log(Math.round(Date.now()/10000))

let newDate  = new Date()
console.log(newDate)
console.log(newDate.getDate())

//customized date formats

newDate.toLocaleString('default',{
    weekday: "long",
})


