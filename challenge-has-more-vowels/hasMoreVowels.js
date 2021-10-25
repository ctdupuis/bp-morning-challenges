// Teamed with Emily Simpson and Christian Colson

const hasMoreVowels = phrase => {
    let phraseArr = phrase.split("");
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let vowelsFromPhrase = phraseArr.filter(word => vowels.includes(word)).join("").trim();
    let consonantsFromPhrase = phraseArr.filter(word => !vowels.includes(word)).join("").trim();
    
    console.log(vowelsFromPhrase)
    console.log(consonantsFromPhrase)
    return vowelsFromPhrase.length > consonantsFromPhrase.length ? true : false
}

console.log(hasMoreVowels("Assessment"))