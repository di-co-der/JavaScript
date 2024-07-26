const accountId = 23213
let accountEmail = "raghav"
city = "jaipur"//not a good practice
var state // dont use var beacause of issue in block scope and functional scope
// accountId  = 2 //not allowed

console.log(accountEmail)
//to print in tables
console.table([accountId, accountEmail, city])