// Write your solution below:
// Paired with Immanuel Mamou


const pigLatinize = sentence => {
    let vowelsArr = ["a", "e", "i", "o", "u"];
    let words = sentence.split(" ");

    let latinized = words.map(word => {
        if (vowelsArr.indexOf(word[0]) !== -1) {
            return word + "yay"
        } else {
            return word.slice(1, word.length) + word.slice(0, 1) + "ay"
        }
    }).join(" ");
    return latinized
}

// I'm making changes to this repo to see if it'll push correctly
console.log(pigLatinize("porcupines are cute"))