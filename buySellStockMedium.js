var maxProfit = function(prices) {
    let profit = 0;
    let j=1
    for(let i=0; i<prices.length; i++) {
        if(prices[j] > prices[i]) {
            profit += prices[j]-prices[i]
        }
        j++
    }
    return profit
};
