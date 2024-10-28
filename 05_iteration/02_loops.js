const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    py: 'python'
}

for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`)
}

// //can forin loop be used on array
const marvel_heros = ["thor", "ironman", "spiderman"]

// for (const key in marvel_heros) {
//     console.log(key)                          //prints 0 1 2 or keys
// }

// for (const key in marvel_heros) {
//     console.log(marvel_heros[key])             //prints vales in array
// }


// //FORIN LOOP ON MAP
const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FRN','France')
map.set('IN','India')

// for (const key in map) {
//     console.log(key)                          //map is not iterable using for in loop
// }

// // FOR EACH LOOP
const coding = ['js', 'ruby', 'java', 'python', 'c++']

// coding.forEach( function (item){
//     console.log(item)
// } )

// coding.forEach( (val) => {
//     console.log(val)
// } )

// function print(item){
//     console.log(item)
// }
// coding.forEach(print)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

// // js 0 [ 'js', 'ruby', 'java', 'python', 'c++' ]
// // ruby 1 [ 'js', 'ruby', 'java', 'python', 'c++' ]
// // java 2 [ 'js', 'ruby', 'java', 'python', 'c++' ]
// // python 3 [ 'js', 'ruby', 'java', 'python', 'c++' ]
// // c++ 4 [ 'js', 'ruby', 'java', 'python', 'c++' ]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "c"
    }
]

// myCoding.forEach((item) => {
//     console.log(item.languageName)
// })