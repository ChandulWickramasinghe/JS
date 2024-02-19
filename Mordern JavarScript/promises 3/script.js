var RandNum = Math.floor(Math.random()*10);
console.log(RandNum);
var sera = new Promise((result,error)=>{
    if(RandNum > 5){
        
        result("true")
    }else{
        error("false");
    }
});

sera.then(result1 => {
    console.log("1"+result1)
}).catch(error1 => {
    console.log("1"+error1);
});



console.log("____________")




function NumbGue(){
    
    return new Promise((resolve,reject) => {
        
        if(8 < 10){
            resolve("true");
        }else{
            reject("false");
        }
    });

}
NumbGue().then(result => {
    console.log("2"+result)
}).catch(error => {
    console.log(""+error)
});

function getData(key) {
    return new Promise((resolve2,reject2)=>{
    setTimeout(() => {
        if(key === "abc123"){
        console.log("Getting Data............");
        const data = "rawData";
        resolve2(data);
    }else{
        reject2("invalid number");
    }
        },1000);
    });
}
function processData(data){
    return new Promise((resolve3 , reject3)=>{
    console.log("Processing Data........");
    setTimeout(() => {const pdata = data + "is processed";
    resolve3(pdata);
},1000);
});
}
function formateData(pdata){
    return new Promise((resolve4,reject4)=>{
    setTimeout(()=>{
        console.log("formatting Data...........");
        const fdata = pdata + "is formatted";
    resolve4(fdata); 
},1000);
    });
}

function displayData(){
    getData("abc123").then(processData)
    .then(formateData)
    .then(result => console.log(result))
    .catch(error =>  console.log(error));
}
// function displayData(){
//     getData("abc123").then(result =>{
//         return processData(result)
//     }).then(result =>{
//         return formateData(result)
//     }).then(result =>{

//         console.log(result)
//     }).catch(error => {
//         console.log(error)
//     });
// }
displayData();



