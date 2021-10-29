// Teamed with Edrea Robinson and Natalie Jones

const missingNumber = (array, maxNum) => {
    let sortedArray = array.sort((a, b) => a - b);
    let currentNum = 0;
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] - sortedArray[currentNum] !== 1) {
            return sortedArray[currentNum] + 1;
        }
        currentNum++;
    }
}


console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10], 10)) // => 8
console.log(missingNumber([11, 14, 16, 13, 12], 5)) // => 15
console.log(missingNumber([20, 22, 23, 24, 25, 26], 6)) // => 21
console.log(missingNumber([53, 52, 47, 48, 46, 45, 50, 49], 8)) // => 51