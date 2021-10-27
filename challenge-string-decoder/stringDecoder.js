// Paired with Beaux Delcambre

const decoder = code => {
    let splitCode = code.split("");
    let result = [];
    let startingIndex = parseInt(splitCode[0])

    for (let i = startingIndex + 1; i < splitCode.length; i++) {
        if (parseInt(splitCode[i]) == splitCode[i]) {
            i += parseInt(splitCode[i])
        } else {
            result.push(splitCode[i])
        }
    }
    return result.join("");
}


console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('2bna0p1mp2osl0e'))
console.log(decoder('0y4akjfes'))