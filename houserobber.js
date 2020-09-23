var rob = function(nums) {
    
    let total = 0;
    
    let len =nums.length;
    
    console.log("lens",len)
    
    if(len === 0)
        return 0;
    
    if(len === 1)
        return nums[0];
    else if(len === 2){
        console.log("len == 2",nums[0],nums[1]);
        return(Math.max(nums[0],nums[1]));
        }
    let dp = [];
    //Build the base case for only one house and two houses
    dp[0]= nums[0];
    dp[1]=Math.max(nums[0],nums[1]);
    
        //For more than 2 houses, consider the current house and the alternate house or the one between these
    for(let i=2;i<len;i++){
        dp[i] = Math.max(nums[i]+dp[i-2], dp[i-1])
    }
  
    return dp[len - 1];
    
};

let nums = [2,7,9,3,1]

console.log("robber function output",rob(nums));