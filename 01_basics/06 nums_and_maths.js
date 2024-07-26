const score = 400 //implicitly defined that it is number

const balance = new Number(100)
console.log(balance); // explicitly defined that it is number
console.log(balance.toString().length) //num converted // to string and we can access more methods to this
console.log(balance.toFixed(2)); // it is used in e-commerce website it converts the number upto 2 decimal places

let otherNumber = 23.89932
console.log(otherNumber.toPrecision(3))
otherNumber = 123.8963
console.log(otherNumber.toPrecision(3))

//for notations you can convert 100s into string and convert it into string

const hundreds = 123659871 //(or nay 100000)
console.log(hundreds.toLocaleString());

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++ //
// Math is an object which has an different methods
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.random()); // gives values between 0 to 1
console.log((Math.random()*10) + 1); // gives values between 1 to 10
console.log(Math.floor((Math.random()*10)) + 1); // gives int values between 1 to 10

// gives values between min and max

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);