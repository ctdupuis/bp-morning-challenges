const numerals = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
}

toRoman = num => {
    let hundreds = ''
    let tens = Math.floor(num / 10)
    return hundreds
}




console.log(toRoman(5)) //'V'

console.log(toRoman(267)) // 'CCLXVII'