// Write your code below
// Paired with Jagruti Depan


// HIGHER ORDER
const isPalindrome = (string) => {
    let reverse = string.split("").reverse().join("");
    return reverse === string ? true : false
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("pretty"))


// WITH CALLBACK FUNCTION
const reverseString = (string) => {
    return string.split("").reverse().join("");
}

const palindromeCallback = (string, reverseString) => {
    return reverseString(string) === string ? true : false
}


console.log(palindromeCallback("racecar", reverseString))
console.log(palindromeCallback("pretty", reverseString))