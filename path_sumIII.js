let pathSum_r = function(root,sum){
    
     
    let result=0;
    if(root == null)
        return 0;
    if(root.val === sum){
        console.log("if",root.val,sum);
        result=result+1;}
        
    
    console.log("pathSum_r root.val result", root.val,result);
    console.log("root.left",root.left,sum-root.val);
    console.log("root.right",root.right,sum-root.val);
    result += pathSum_r(root.left,sum-root.val);
    result += pathSum_r(root.right,sum-root.val);
    return result;
}
var pathSum = function(root, sum) {
    
    if(root === null)
        return 0;
    console.log("pathSum root.val sum", root.val,sum);
    return pathSum(root.left, sum) + pathSum_r(root,sum) + pathSum(root.right,sum);
    
};

let arr= [10,5,-3,3,2,null,11,3,-2,null,1];
let sum = 8;
pathSum(arr,sum);