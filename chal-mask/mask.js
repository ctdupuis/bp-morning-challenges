
maskify = string => {
    // if (string.length > 4) {
    //     return string.split("").splice(0, "#", string.length - 4).join("")
    // } else {
    //     return string
    // }

    let splitStr = string.split("");

    if (string.length > 4) {
        for (let i = 0; i < splitStr.length; i++) {
            
        }
    }
}



console.log(maskify("4556364607935616"))// --> "############5616"

console.log(maskify("Skippy"))// --> "##ippy"

console.log(maskify("1")) //--> "1"

console.log(maskify("")) //--> ""