// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Paired with Immanuel M
// Write your solution below:

const balanced = string => {
    const splitStr = string.split("");

    const leftSide = [];
    const rightSide = [];

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === "(") {
            leftSide.push(splitStr[i])
        };
        if (splitStr[i] === ")") {
            rightSide.push(splitStr[i])
        };
    };
   return rightSide.length === leftSide.length ? "balanced" : "unbalanced";
}


console.log(balanced(sample1))
console.log(balanced(sample2))
console.log(balanced(sample3))
console.log(balanced(sample4))