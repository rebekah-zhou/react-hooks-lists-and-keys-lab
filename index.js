
var fizzBuzz = function(n) {
    const stringArray = []
    for (i=1; i<=n; i++) {
        if (i%3===0 && i%5===0) {
            stringArray.push("FizzBuzz")
        } else if (i%3===0) {
            stringArray.push('Fizz')
        } else if (i%5===0) {
            stringArray.push("Buzz")
        } else stringArray.push(`${i}`)
    }
};

 var fizzBuzz = function(n) {
    const stringArray = []
    for (i=1; i<=n; i++) {
        stringArray.push(i)
    } 
};

const n=4
fizzBuzz()