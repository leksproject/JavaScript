function findmaxprofit(prices){

    let minprice = Number.MAX_VALUE;
    let maxprofit = 0;

    for(let i=0;i< prices.length;i++){
        if(prices[i] < minprice)
            minprice = prices[i];
        else if((prices[i] - minprice) > maxprofit)
            maxprofit = prices[i] - minprice;
    }

    return maxprofit;
}

let price = [7,1,5,3,6,4];
let pr = [7,6,4,3,1]
console.log("Find the maxprofit ", findmaxprofit(pr))