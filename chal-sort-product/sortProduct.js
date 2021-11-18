// Paired with Jagruti Depan

// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

// For sorting the index starts at 1, NOT at 0!

// The sorting has to be ascending.

// The array will never be null and will always contain numbers.

sortProduct = array => {
    
    let totals = [];

    array.forEach((e, i) => {
      let totalObj = {
        total: e*(i+1),
        i: i
      }
      totals.push(totalObj)
    })

    totals.sort((a, b) => a.total - b.total)

    let newArr = []

    totals.forEach(e => newArr.push(array[e.i]))
    
    return newArr
    
}

console.log(sortProduct([23, 2, 3, 4, 5]));

// Product of value and index:

// 23 => 23 * 1 = 23 -> Output-Pos 4

// 2 => 2 * 2 = 4 -> Output-Pos 1

// 3 => 3 * 3 = 9 -> Output-Pos 2

// 4 => 4 * 4 = 16 -> Output-Pos 3

// 5 => 5 * 5 = 25 -> Output-Pos 5

Output: 2, 3, 4, 23, 5