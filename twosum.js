function twosum(array,sum){

    const pairs = [];
    const store = [];

    for(let num1 of array){
        const num2 = sum - num1;

        if(store.indexOf(num2) !== -1){

            console.log("store index",store.indexOf(num2));
            
           pairs.push([num1,num2])
           console.log("pairs",pairs); 
        }
        store.push(num1);
    }
    return pairs;
}

function findtwosum(arr,sum){
    const sumpair = [];
    const store = {};

    

    for(let i of arr){
        let num2 = sum - arr[i];

        
        if(!store.hasOwnProperty(num2)){
            console.log("store ",store.hasOwnProperty(num2),arr[i],num2);
            if(!(sumpair.includes(arr[i]) && sumpair.includes(num2))){
            // if(sumpair.indexOf(arr[i]) && sumpair.indexOf(num2)){
            sumpair.push([arr[i],num2]);
         
        }
        }
        store[arr[i]] = arr[i];
    }
    return sumpair;
}

let arr=[2,4,1,2,2,3]
let sum = 4

 console.log("twosum",twosum(arr,sum));
console.log("Sum",findtwosum(arr,sum));