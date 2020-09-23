let nums = [ 3,5,7,8,2,5,7];

let result = [... new Set(nums)];

console.log("result",result);

//remove duplicates using indexOf and filter
let chars = ['a','b','c','d','a','c'];

let unique = chars.filter((c,index) => {
    console.log("index",c, chars.indexOf(c),index);
        return chars.indexOf(c) === index;
});

console.log("unique",unique);

//duplicate chars
let duplicate = chars.filter((c,index) => {
    // console.log("index",c, chars.indexOf(c),index);
    let val = new Set();
     val = chars.indexOf(c) !== chars.lastIndexOf(c);
    console.log("val",val);
        return val;
});

console.log("duplicate",duplicate);

