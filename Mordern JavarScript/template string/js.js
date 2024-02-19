var name = "chandul";

var stringName = "This is Output of name"+`Hello My name is  ${name}`;
console.log(stringName);

//Amount and sumery collector
function serviceCharge(amount){
    let sumery = amount * 0.1;
    return sumery;    

}
console.log("This is Output of service"+`Total sumery is ${serviceCharge(1000)} `);

console.log("This is Output of Second of year"+`Second Of year:    ${(24*60*60)*365}`);