//Given a coins of different denomincations, and total amount of money, 
//Write a function to compute the fewest number of coins to make up that amount.
// If cannot be made, return -1.

//Input coins : [1,2,5] amount - 11
//Output : 3


function coin_change(coins, amount)
{
    const dp = new Array(amount+1);

     dp.fill(12);

    dp[0] = 0;
    for(let i=0;i<=amount;i++){
        for(let j=0;j<coins.length;j++){
            if(coins[j] <= i){
               
                let temp = i-coins[j];
                console.log("dp[i-coins[j]",i,temp,coins[j],dp[temp]);
                let val = 1+ dp[temp];
                console.log("val",val);
                dp[i] = Math.min(dp[i],val);
                console.log("dp value",dp[i]);
            }
        }
    }
    console.log("dp[amount",dp[amount]);
    return dp[amount] > amount ? -1 : dp[amount];

}

let coins = [1,2,5];
let amount = 11;

let final=coin_change(coins,amount);
console.log("Result",final);