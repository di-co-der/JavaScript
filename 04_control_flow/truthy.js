const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { //Object.keys(emptyObj) gives you array of keys
    console.log("Object is empty");
}


// false == 0 //output true
// false == '' //output true
// 0 == '' //output true

// Nullish Coalescing Operator (??): null undefined

//it is used when you call from data base and if database return null then we change accordingly
//to handle error
let val1;
// val1 = 5 ?? 10 //phli not null/unefined value jayegi
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
val1 = null ?? undefined



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")