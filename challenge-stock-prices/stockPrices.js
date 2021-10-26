// Paired with Jagruti Depan

const best = prices => {
    let start = prices[0];
    let profits = [];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < start) {
            start = prices[i]
        }
        profits.push(prices[i] - start)
    }
    return Math.max(...profits);
}

console.log(best([5, 4, 3, 2, 1]))