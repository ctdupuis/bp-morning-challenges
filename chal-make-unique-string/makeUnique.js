// Write your solution below:

// Paired with Jagruti Depan

const makeUnique = string => {
    const splitStr = string.split("");
    const letters = [];

    for (let i = 0; i < splitStr.length; i++) {
        if (!letters.includes(splitStr[i])) {
            letters.push(splitStr[i])
        }
    }

    return letters.join("");

}

console.log(makeUnique('helloworld')); //helowrd
console.log(makeUnique('iwanttoclimbamountain')); //iwantoclmbu
console.log(makeUnique('alongstringwithduplicateletters'));