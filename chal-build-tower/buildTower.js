// Teamed with Katie Griffith and Jagruti Depan

// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.



// function towerBuilder(nFloors) {
//     const tower = []
//     let towerString = '*'

//     for(let i = 0; i<nFloors; i++){ 
//         tower.push(towerString)
//         towerString += "**"

//         for (let j = 0; j<i; j++){
//             tower[j] = " " + tower[j] + ' '
//         }
//     }
//     return tower
// }

towerBuilder = (nFloors) => {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
        + "*".repeat((i * 2)+ 1)
        + " ".repeat(nFloors - i - 1));
    }
    return tower;
}

console.log(towerBuilder(5));


// For example, a tower of 3 floors looks like this (note the spacing):

let guide = {
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5
}

let twoFloors = [
    ' * ',
    '***'
] // 1

let threeFloors = [
    '  *  ',
    ' *** ',
    '*****'
] // 2

let fourFloors = [
    '   *   ',
    '  ***  ',
    ' ***** ',
    '*******'
] // 3

let fiveFloors = [
    '    *    ',
    '   ***   ',
    '  *****  ',
    ' ******* ',
    '*********'
] // 4

let sixFloors = [
    '     *     ',
    '    ***    ',
    '   *****   ',
    '  *******  ',
    ' ********* ',
    '***********',
] // 5