let score = "33abc"

console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // not a number

//convesion from this to Number gives =>
/* "33" => 33
    "22acd" => NaN
    true => 1; false => 0
    null => 0
    undefined => NaN
*/


let isloggedin = ""

isloggedin = Boolean(isloggedin)
console.log(isloggedin)

//convesion from this to Boolean gives =>

// 1 => true
//"" => false
// "hitesh" => true

let somenumber = 0
somenumber = String(somenumber)
console.log(somenumber)

/*****************operations******************/
let value = 3
let negValue = -value;
console.log(negValue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2)
console.log(2%3)

let str1 = "Divyansh"
let str2 = " Raghav"
let str3 = str1 + str2
console.log(str3)

//problem arises here

console.log("1" + 2)
console.log(1 + "2")
console.log(1 + "2" + "3")
console.log(1 + "2" + 3)
console.log(1 + 2 + "3")
console.log("1" + 2 + 3)

console.log(+true)
console.log(+"")

let num1 = num2 = num3 = 2+2 //not a good practice
console.table([num1,num2,num3])

let gameCounter = 100;
gameCounter++;
console.log(gameCounter)