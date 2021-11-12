// Paired with Michael Bodin

// In DNA strings, symbols “A” and “T” are complements of each other, as are “C” and “G”.

// Write a function that takes in a string (one side of the DNA); it should return the other complementary side.


const dnaStrand = dna => {
    const dnaObj = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }

    return dna.split("").map(elem => dnaObj[elem]).join("");
}


console.log(dnaStrand("ATTGC")) // "TAACG"

console.log(dnaStrand("GTAT")) // "CATA"