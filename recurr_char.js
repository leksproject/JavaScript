function findrecur_char(text)
{
    let charMap = {};

    let maxcharvalue = 0;
    let maxchar = '';

    for(let char of text){
       if(charMap.hasOwnProperty(char))
       {
           charMap[char] +=1
       }
       else
            charMap[char] = 1;
       
    }

    let charArray = Object.keys(charMap);
    console.log("charArr",charArray);

    let charcnt = Object.values(charMap);
    console.log("Charcnt",charcnt);

    maxcharvalue = Math.max(...charcnt);
    console.log("macharvalue",maxcharvalue);
    let maxindex = charcnt.indexOf(maxcharvalue);
    return charArray[maxindex];
   
}

console.log("Char with max count",findrecur_char("aaabbbccccc"));