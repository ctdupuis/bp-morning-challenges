// Paired with Jagruti Depan

smallestDiff = (arr1, arr2) => {
    let diff = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] > arr2[j]) {
                diff.push(arr1[i] - arr2[j])
            } else {
                diff.push(arr2[j] - arr1[i])
            }
        }
    }
    return Math.min(...diff);
}

let arr1 = [10, 20, 14, 16, 18]
let arr2 = [30, 23, 54, 33, 96]

let arr3 = [10, 56, 54]
let arr4 = [69, 420, 54]

console.log(smallestDiff(arr1, arr2));
console.log(smallestDiff(arr3, arr4));