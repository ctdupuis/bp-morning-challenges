// Paired with Jagruti Depan

const best = prices => {
    let buyingPrice = prices[0];
    // let profits = [];
    // for (let i = 0; i < prices.length; i++) {
    //     if (prices[i] < start) {
    //         start = prices[i]
    //     }
    //     profits.push(prices[i] - start)
    // }
    let profits = prices.map(price => {
        if (price < buyingPrice) {
            buyingPrice = price
        }
        return price - buyingPrice
    })
    return Math.max(...profits);
}

console.log(best([5, 4, 3, 2, 1]))
console.log(best([15, 10, 20, 22, 1, 9]))
console.log(best([7, 9, 5, 6, 3, 2]))
console.log(best([0, 100]))
console.log(best([5, 4 , 3, 2, 1]))