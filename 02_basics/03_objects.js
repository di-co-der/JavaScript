//object can declare using two ways - by literals and by using constructor

//singleton - when u declare like constructor then it is singleton, eg:- object.create()

//object literal
const user = {
    name: "Divyansh",
    age : 20,
    "full name" : "Divyansh Raghav",
    location : "jaipur",
    email : "raghav@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monaday", "Saturday"]
}

// to access array
console.log(user.age)
console.log(user["email"])
//u can't access the full name using .
console.log(user["full name"])


/***************interview*************/
// declaring symbol and add it in key and print it in

const mysym = Symbol("key1")

const user1 = {
    name: "Divyansh",
    age : 20,
    // mysym : "mykey1", // it is not correct as the data typeof my sym is string not symbol
    [mysym] : "mykey2", //right syntax of symbol
    "full name" : "Divyansh Raghav",
    location : "jaipur",
    email : "raghav@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monaday", "Saturday"],
    greeting3 : function(){
        console.log("jai siya ram")
    }
}

console.log(user1[mysym])
console.log(typeof(user1[mysym])) //type string
console.log(user1)

// to make the  change
user.email = "raghav@chatgpt>com"
// if you want to freeze the object to not change furter
// Object.freeze(user)
user.email = "raghav@microsoft.com"// error kuch nhi aayega but chnge kuch nhi hoga


//  creating ofunction in objects

user.greeting = function(){
    console.log("Hello ji");
}
//calling the function
console.log(user.greeting());

//sirf function ka reference aaya hai
console.log(user.greeting);

user.greeting2 = function(){
    console.log(`hello js user, ${this["full name"]} `); // uss object ko refernce lene ke liye this ka use krte hain, string interpolation
}

console.log(user.greeting2());


console.log(user)