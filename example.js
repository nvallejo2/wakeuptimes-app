// print statement
//console.log("Hello, JS!")

//structured programming
/*
for(let i = 1; i <= 20; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
        console.log("fizzbuzz") 
    } else if (i % 2 === 0) {
        console.log("fizz") 
    } else if (i % 5 === 0) {
        console.log("buzz") 
    } else {
        console.log(i)
    }
}
*/
//procedural programming
// organize into functions
function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 5 === 0) {
            console.log("fizzbuzz") 
        } else if (i % 2 === 0) {
            console.log("fizz") 
        } else if (i % 5 === 0) {
            console.log("buzz") 
        } else {
            console.log(i)
        }
    }
}

// call function
fizzBuzz(10)