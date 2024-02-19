function getData(key,callback){
    
    setTimeout(() => {if(key === "abc123"){
        console.log("Getting Data............");
        const data = "rawData";
        callback(null,data);
    }else{
        callback("invalid number",null);
    }
},1000);
  
}
function processData(data,callback){
    console.log("Processing Data........");
    setTimeout(() => {const pdata = data + "is processed";
    callback(null,pdata);
},1000);
}
function formateData(pdata,callback){
    
    setTimeout(()=>{
        console.log("formatting Data...........");
        const fdata = pdata + "is formatted";
    callback(null,fdata); 
},1000);
}

function displayData(){

getData("abc123",function(error,data){
    if(error){
        console.log(error);
    }else{
        processData(data,function(error,pdata){
            if(error){
                console.log(error);
            }else{
                formateData(pdata,function(error,fdata){
                    if(error){
                        console.log(error);
                    }else{
                        console.log(fdata);
                    }
                });
            }
        });
    }
});







}

displayData();