// Write your code below this line

// Paired with Jerrell Prier

const decoder = (string) => {
    const num = parseInt(string[0]);
    const letters = string.slice(1, string.length).split("");
    return letters.map(letter => String.fromCharCode(letter.charCodeAt(0) + num)).join("");
}

console.log(decoder("1a"))
console.log(decoder("3ce"))
console.log(decoder("2fcjjm"))