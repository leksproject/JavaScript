function palindrome(text){
    const tempstr = text.replace(/\W/g,"").toLowerCase();

    for(let i in tempstr)
    {
        if(!tempstr[i] === tempstr[tempstr.length - 1 - i])
            return false;
        else return true;
    }
    const palind=tempstr.split("").every((char,index) =>
        {
            char === text[text.length - 1- index]
            console.log("char",char);
        });

    console.log("tempstr",tempstr); 
    console.log("palind",palind);
}

function testpalind(text){
    let tstr = text.toLowerCase().replace(/\W/g,"");

    let revstr = tstr.split("").reverse().join('');

    return tstr === revstr;
}

console.log("testpalind",testpalind('A man, a plan, a canal. Panama'));

console.log(palindrome("Cigar? Toss it in a can. It is so tragic"));