let printers = ["brothers","canon   ","HP      ","Epson   "];
for(let i = 0;i < printers.length;i++){
    console.log(i,printers[i]);
}
for(let [index,value] of printers.entries()){
        console.log(index,value);
}

let movie = {
    title:"The therminal",
    starring:"Tom Hanks",
    year:2004,
    duration:128
};
for(let key in movie){
    console.log(key,"   ",movie[key]);

}