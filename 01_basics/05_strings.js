const name1 = "divyansh"
const repoCount = 50

console.log(name1 + repoCount + "value")

console.log(`Hello my name is ${name1} and my repo count is ${repoCount}`)

// "new" keyword is used to use objects of JS
// other way to define string data type
// here string is a object in key-value pair
const gameName = new String('DivyanshDR')
//the() is called constructor
// now you can access all methods of string object

console.log(gameName[0])
console.log(gameName.__proto__) // gives object, you can directly access other
//prototype methods without use of proto
console.log(gameName.toUpperCase())
//it does not change the original string, it changes the copy
console.log(gameName.length)