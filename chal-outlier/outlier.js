// Paired with Laurance Vincent

numberIsEven = num => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

outlier = numbers => {
    let odds = [];
    let evens = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numberIsEven(numbers[i])) {
            evens.push(numbers[i]);
        } else {
            odds.push(numbers[i]);
        }
    }

    return evens.length < odds.length ? evens.join("") : odds.join("");
}

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36])) // 11
console.log(outlier([160, 3, 1719, 19, 11, 13, -21])) // 160