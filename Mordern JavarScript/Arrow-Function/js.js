function name(a,b){
    return(a+b);
}
console.log("Result name   "+ name(2,4));

 

const name1 = (a,b) =>{
 return a+b;
}


console.log("Result name1   "+ name(2,4));


const name2 = (a,b) => a+b
   
   
   console.log("Result name2   "+ name2(2,4));
   



function serviceCharge(amount){
    return amount * 0.1
}


console.log("ServiceCharge is:   "+ serviceCharge(100));




serviceCharge2 = amount => amount * 0.1

    console.log("ServiceCharge is: "+ serviceCharge(100));



    ////anonymus FUNCTION




// setTimeout(()=>{alert("Hello World!")},3000);


(function(){
    console.log("Hello World")
})();


(() => {
    console.log("HI Teacher")}
    )();



    const valueObject = {
        "name":"Dillep",
        "secondName":"Kariyawasam",
        functionName:function(){
            console.log(this.name + "  " + this.secondName);
        
        // (function(){
        //     console.log("Anonymus Fucntion:"+"  "+this.name+"  "+this.secondName);
        // })();
        // }

        (() => {
            console.log("Anonymus Function:"+"  "+this.name+"  "+this.secondName);
        })();
        }
    }

valueObject.functionName();
