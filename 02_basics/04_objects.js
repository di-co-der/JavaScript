// singleton object

const tinderUser = new Object()

tinderUser.id = "123abs"
tinderUser.name = "simmy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

//nesting of objects

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstName : "Divyansh",
            lastName : "Raghav"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname.userfullname.firstName)
console.log(regularUser.fullname ? (regularUser.fullname.userfullname.firstName) : console.log("enter name"));

//combining of objects

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

const obj3 = {obj1, obj2} // problem

/**********Important*************/
const obj4 = Object.assign({}, obj1, obj2) // ye "{}" target hai aur baaki ke source
console.log(obj4);

// /**********Most used syntax************/
// //spread method
const obj5 = {...obj1, ...obj2}
console.log(obj5)

// /***************** most important used in database ***************/

// //when data comes from database then you have array of objects like :-

// const users = [
//     {
//         email : "h@hmfld.com",
//         age : 24
//     },
//     {
//         email : "h@hmdfdddcdvfld.com",
//         age : 23
//     },
//     {
//         email : "h@hmfdvegregregregerld.com",
//         age : 25
//     }
// ]

// users[0].age

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // saari keys ko array mai daal diya
// console.log(Object.values(tinderUser)) // saari values ko array mai daal diya
// console.log(Object.entries(tinderUser)) // first key hogi and dusri values hogi jo array mai daal diya

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check this property is present or not

/*********Destructuring of objects************/
/*********IMPORTANT************/

const course = {
    courseName : "JS in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor, but use the below

const {courseInstructor} = course
console.log(courseInstructor)

//you can name the var as different name
const {courseInstructor : instructor} = course
console.log(instructor)

// concept of react, note that "{}" this should be used in destructuring
const navbar = ({company}) => {

}
navbar(company = "hitesh")

//API => Apna kaam kisi aur pr daal dena. Generally in JSON format like :

// {
//     "user" : "Raghav",
//     "email" : "jsahcio@gmail.com",
//     "num" : "901010922"
// }

// [
//     {},
//     {},
//     {},
//     {},
// ]

// api :  url: 'https://randomuser.me/api/' 