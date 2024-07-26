let a = 10
var b = 20
const c = 30

console.log(a);
console.log(b);
console.log(c);

if(true){
    let a = 10
    var b = 20
    const c = 30
}

// let and const has block scope but var has functional scope 

//var c = 300
// let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// {} -> scope 

// console.log(a);
// console.log(b);
// console.log(c);

//NOTE: browser mai scope alag hai aur terminal mai ode se file run krne mai scope alag hai

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //not accesible 

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


//addTwo(5) but here does not work as  function is declared differently
const addTwo = function(num){
    return num + 2
}
addTwo(5)

