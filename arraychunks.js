function chunk(arr,size){
    const chunkarr = [];
    let index=0;

    while(index < arr.length){
        chunkarr.push(arr.slice(index,index+size));
        index = index+size;
    }
    console.log("chunkarr inside",chunkarr);
    return chunkarr;
}

let arr=[2,5,6,1,6,7];
let final = chunk(arr,2);
console.log("chunk arr",final);