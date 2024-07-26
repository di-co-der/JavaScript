// array, it contains multiple items under a single variable
// different data type
// resizable
// js array are not associative array, can't be accessed by
// arbitrary strings as indexes
// js array-copy operations create shallow copies (share same reference (call by reference by value))
//deep copy whose properties do not share the same reference point

const myarr = [0, 1, 3, 4, 6, 7, 4]

const myarr2 = new Array(1,2,3,4,5,6)

console.log(myarr2);

//Array methods

myarr2.push(6) // add elements at last
console.log(myarr2)
myarr2.pop() // delete elements
console.log(myarr2)
myarr2.unshift(0) // add elements at first // try not to use as it is costly
console.log(myarr2)
myarr2.shift() // delete elements at first
console.log(myarr2)

//some other array methods to ask question

console.log(myarr2.includes(9)); //as it gives boolean answer
console.log(myarr2.indexOf(9));

//join converts our array into string

const newarray = myarr2.join()

console.log(newarray);
console.log(typeof newarray);

//Slice, splice

console.log("A ", myarr2)
const myn1 = myarr2.slice(0,3);
console.log( myn1)
console.log( myarr2)


console.log("B ", myarr2)
const myn2 = myarr2.splice(0,3);
console.log( myn2)
console.log( myarr2)
