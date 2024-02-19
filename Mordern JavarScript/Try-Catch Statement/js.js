console.log("Script Started");
try{
console.log(message);
}catch(error){
    console.log(error);
}finally{
    console.log("Try-Catch Statement is ended");
}




function noerror(username){
    if(typeof username == 'undefined'){
        throw new Error("username is Not a Arguament");
    }else{
    console.log("Hi",username);
    }
}
try{
noerror();
}catch(erro){
    console.log(erro);
}finally{
    console.log("Error has been fixed");
}
console.log("Scirpt Ended");