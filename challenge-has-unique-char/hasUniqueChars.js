// Write your code below
// Paired with Emily Simpson

function hasUniqueChars(string) {
    let array = string.split("");

    let result = {};

    for (let i = 0; i < array.length; i++) {
        if (result[array[i]]) {
            return false;
        } else {
            result[array[i]] = true;
        }
    }
    return true
}

console.log(hasUniqueChars("Bob"))
console.log(hasUniqueChars("llama"))