// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //dont forget to semicolon

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// global scope ke pollution se bachne ke liye iife ka use krte hain