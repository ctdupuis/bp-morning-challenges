// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let result = false;

for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length; x++) {
        if (i != x) {
            if (array[i] + array[x] === 0) {
                result = true
            }
        }
    }
}
console.log(result)


// https://dev.to/colerau/checking-whether-there-are-any-two-numbers-that-will-sum-up-to-a-given-number-3gi9
// Added a more advanced solution found on Dev.to

sumFinder = array => {
    let obj = {}
    let diff

    for (let i = 0; i < array.length; i++) {
        diff = 0 - array[i]

        if (obj[diff]) {
            return true
        } else {
            obj[array[i]] = true
        }
    }
    return false
}

console.log(sumFinder(array))