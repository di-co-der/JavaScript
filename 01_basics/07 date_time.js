// date

let myDate = new Date() // it is the object of date and its instance
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toDateString());
let myCreatedDate2 = new Date(2023, 0, 23,15,3,40)
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString());

//concept of timestamp used in hotel app and races, quizzes, polls

let myTimeStamp = Date.now() //The Date.now() method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC

console.log(myTimeStamp);//
console.log(myCreatedDate1.getTime()); // gives the value from that date 1970

/*interview <question></question>*/
//convert "now" time into second by dividing by 1000 and takes its floor value

console.log(Math.floor(Date.now()/1000));

console.log(myDate.toLocaleString('default', {month:'long',weekday: 'long'}))//important one

//you can use `backticks` for user friendly string interpolation

