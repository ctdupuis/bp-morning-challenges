// Write your solution below:
// Sorts shirts from s => l

// Paired with Beaux Delcambre


const tShirtSorter = shirts => {
    let array = shirts.split("");
    
    // abcdefghijklmnopqrstuvwxyz
    // earlier letters are considered lower than later letters, a = 0, z = 25
    // a < z => true
    
    const sorter = (a, b) => {
        // if a > b, push a to the back and move b up
        if (a > b) {
            return -1

        // if they are the same, return the same order
        } else if (a === b) {
            return 0

        // only other option a > b, push a to the front and push back b
        } else {
            return 1
        }
    }
    return array.sort(sorter).join("")
    
}

const loopSorter = shirts => {
    let array = shirts.split("");
    let sm = [];
    let med = [];
    let lg = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] === "s") {
            sm.push(array[i]);
        };

        if (array[i] === "m") {
            med.push(array[i]);
        };

        if (array[i] === "l") {
            lg.push(array[i]);
        };
    }
    return sm.concat(med, lg).join("");
}



console.log(tShirtSorter('lsmmslmslllsmmlsm'))
console.log(loopSorter('lsmmslmslllsmmlsm'))