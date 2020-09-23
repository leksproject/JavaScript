//This function is to return capitalize of a string
//this is beautiful => This Is Beautiful

function capitalize_string(string){
    let wordarr=[];
    wordarr= string.toLowerCase().split(' ');
    let caparr = [];
    for(let word of wordarr){
        caparr.push(word[0].toUpperCase() + word.slice(1));
        console.log("caparr",caparr);
    }
    return caparr;
}

capitalize_string("james of thrones");