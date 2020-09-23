const employees = [{
    name : "first"},
   { name : " Park Green"},
   { name : "Angel Green"}

];

let str = "gre";
const strsearch=(employees)=>{

    // console.log(Object.keys(employees));

    // const searchstr = str=>employees.find(element => element.name === str);

    // console.log("search",searchstr("gre"));
    
   for(let index of Object.values(employees)){

        console.log("index",index);
   }
    console.log("lowercase",employees.filter(obj=>obj.name.toLowerCase()));

    const final=employees.filter(obj=>obj.name.toLowerCase().search(str.toLowerCase()));

    console.log("final",final);

}

console.log(strsearch(employees));