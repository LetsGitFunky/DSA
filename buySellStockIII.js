var maxProfit = function(prices) {
    let maxReverse = 0;
    let minReverse = Infinity;
    let maxProfitReverse = 0;
    let maxProfitReverseArray = new Array(prices.length).fill(0);

    let max = 0;
    let min = Infinity;
    let maxProfit = 0;
    let maxTotalProfit = 0;

    //iterating backwards to fill up "maxProfitReverseArray" with right side profit for each index.
    for (let i = prices.length - 1; i >= 0; i--) {
        let currentPrice = prices[i];
        maxReverse = Math.max(maxReverse, currentPrice);
        maxProfitReverse = Math.max(maxProfitReverse, maxReverse - currentPrice);
        maxProfitReverseArray[i] = maxProfitReverse;
    }

    //iterating forwards to calculate max profit on the left side and then adding right side, returning maximum possible sum as answer.
    for (let k = 0; k < prices.length; k++) {
        let currentPrice = prices[k];
        min = Math.min(min, currentPrice);
        maxProfit = Math.max(maxProfit, currentPrice - min);
        maxTotalProfit = Math.max(maxTotalProfit, maxProfit + maxProfitReverseArray[k]);
    }

    return maxTotalProfit;
};
