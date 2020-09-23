function anagram(stringA, stringB)
{

    const stropn = (string) =>
        string.replace(/\W/g,"").toLowerCase().split("").sort().join("");

    let chstrA = stropn(stringA);
    console.log(chstrA);
    let chstrB = stropn(stringB);
    console.log(chstrB);
    
    return chstrA === chstrB;


}

console.log("Anagrams : listen,silent",anagram("listen","silent"));