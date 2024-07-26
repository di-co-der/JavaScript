const marvel_heros = [ "thor", "ironman", "spiderman"]
const dc_heros = [ "superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros) //not a good method to merge the array
console.log(marvel_heros[3][1]) // not a good method

//use concatenate method, it returns a new array
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

//we can also use spread method to merge these [kaanch ka glass gira toh spread ho jaata h]

/***************interview**********************/
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

//suppose u have to flat the array then use flat

const other_array = [1,2,[3,4,5],6,7,8,[2,3,5,[9,0]],1]

const real_other_array = other_array.flat(Infinity)

console.log(real_other_array)

//ask whether the given array is array or not
console.log(Array.isArray("Divyansh"))

//converting above into array
console.log(Array.from("Divyansh"))

//interesting case
console.log(Array.from({name: "Divyansh"})) // you have to specify ki key ka ARRAY bnana hai ya value ka

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
