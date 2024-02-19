var RandNum = Math.floor(Math.random()*10);
console.log(RandNum);
function sera(){
    return new Promise((result,error)=>{
    
    
    if(5 < RandNum){
        
        result("true")
    }else{
        error("false");
    }

    });
}

async function checkNumber(){
    try{
        const randomNumber = await sera();
        console.log(randomNumber);
    }catch(error){
        console.log(error);
    }
}
checkNumber();


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

// function displayData(){
//     getData("abc123").then(processData)
//     .then(formateData)
//     .then(result => console.log(result))
//     .catch(error =>  console.log(error));
// }

async function displayData(){
    try{
    const data = await getData("abc123");
    const pdata = await processData(data);
    const fdata = await formateData(pdata);
    console.log("result"+"  "+fdata);
}catch(error){
    console.log("error"+"  "+error);
}
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