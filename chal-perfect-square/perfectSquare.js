// Paired with Michael Bodin

isFloat = n => {
    return Number(n) === n && n % 1 !== 0;
}

perfectSquare = number => {
    let square = Math.sqrt(number) + 1;
    let next = square * square;

    if (isFloat(square)) {
        return -1;
    } else {
        return next;
    }
}

console.log(perfectSquare(9)) // 16
console.log(perfectSquare(289)) // 324
console.log(perfectSquare(3000)) // -1