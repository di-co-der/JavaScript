//on the basis of storage of data and access of data,
//data types are of two types : primitive and reference type

//primitive type : 7 types => String, Number, null, undefined, symbol, BigInt


const id = Symbol("123")
const id2 = Symbol("123")
console.log(id == id2)

const bignum = 5646849848498484564n //last mai 'n' laga dein bigint ban jayega

// reference type: array, object, function

//array
 const heros = ["shaktiman", "wonderwoman", "spiddy"]

 //object
 let myobj = {
    name : "Divyansh",
    age : 19
 }

 // function

 const myFunction = function(){
    console.log("Hello world");
 }
 console.log(typeof(heros))
 console.log(typeof(myobj))
 console.log(typeof(myFunction))

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//stack(primitive), Heap (Non - Primitive)


//stack
let name1 = "raghav"
let name2 = name1
name2 = "divyansh"
console.log(name1)
console.log(name2)


//heap
let user1 = {
    email: "dsf@gmail.com",
    upi: "dsf@ybl"
}

let user2 = user1
user2.email = "reag@gmail.com"

console.log(user1)
console.log(user2)