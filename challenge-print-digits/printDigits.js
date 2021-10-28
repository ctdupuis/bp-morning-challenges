// When given an integer, the function should print each digit in reverse order, starting with the ones place. Solve the problem using math, do not turn the number into a string. Hint: while loops and % operator

// Paired with Jagruti Depan and Michael Bodin

const printDigits = num => {
    let rev = 0;
    let lastDigit;

    while (num != 0) {
        lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num/10);
    }
    return rev
}

console.log(printDigits(12)) // 2, 1
console.log(printDigits(314)) // 4, 1, 3