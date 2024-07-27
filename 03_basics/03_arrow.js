// this is not used in arrow function 
//No arguments object in arrow functions
// this talk about current context 
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


//In browser  console.log(this); gives window object and in node envioronment it gives empty object.
// because in browser the global object is window object 
// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this)
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) //without return keyword, it uses in react.

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// refer :- https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/