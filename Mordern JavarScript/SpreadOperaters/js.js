const on = ["mon","tue","wed","thu","fri"];
const off = ["sat","sun"];
const dayOfWeeks = [...on , ...off];
console.log(dayOfWeeks);

const car = {
    "name":"nissan",
    "age":"8"
}
const modify = {
    "HeadLights":"LED,CFL",
    "Seat":"Sofa Same"
}
const modifyCar = {...car , ...modify};
console.log(modifyCar);


function name1(num1 , num2){
 console.log(num1 + num2);
}
const inputs = [4,6];
name1(inputs[0],inputs[1]);

function name2(numb1 , numb2){
    console.log(numb1 + numb2);
   }
name2(...inputs);