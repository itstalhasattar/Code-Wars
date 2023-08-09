
// If the number is a multiple of 3, you need to print "Fizz" instead of that number.
// If the number is a multiple of 5, you need to print "Buzz" instead of that number.
// If the number is a multiple of both 3 and 5, you need to print "FizzBuzz" instead of that number.


function fizzBuZZ () {
    for (let num =1; num<=100 ; num++) {
        if (num % 3 == 0 && num % 5 ==0){
            console.log("FizzBuzz")
        }
        else if (num % 3 ==0){
            console.log("Fizz")
        }
        else if (num % 5 ==0) {
            console.log("buzz")
        }
        else{console.log(`${num}`)}
    }
}

fizzBuZZ()