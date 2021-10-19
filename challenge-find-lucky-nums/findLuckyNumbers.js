// Write your code below this line.
// Paired with Icarus Romero and Tamara Chance

function luckyNumbers(n) {
    const array = []
    while (array.length < n) {
        let r = Math.floor(Math.random() * 10) + 1;
        if(array.indexOf(r) === -1) array.push(r)
    }
    return array
}

console.log(luckyNumbers(5))