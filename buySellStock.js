var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0]
    for (let currentPrice of prices) {
        let currentProfit = currentPrice - minPrice;
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }
    return maxProfit
};
