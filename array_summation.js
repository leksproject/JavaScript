// Function returns true, if any of the two numbers in first array
// add to any of the numbers in second array and false otherwise.
function array_sum(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        for(let j=i+1;j<arr1.length;j++){
            let temp = arr1[i]+arr1[j];
            console.log("temp",temp,arr1[i],arr2[j]);
            if(arr2.includes(temp)){
            return true;
        }
        }
        return false;
    }

}

// let arr1=[-1,8,3];
// let arr2=[3,7,2];
let arr1=[9,6,12];
let arr2=[1,2,3]
console.log("result",array_sum(arr1,arr2));