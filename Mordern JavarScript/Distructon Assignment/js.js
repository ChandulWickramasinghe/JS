const array1 = [1,2,3,4,5,6,7,8];
const  arrayforone = [array1[0],array1[1]];

const [number1,number2, , ,number5,...others] = array1;

console.log(number1);
console.log(number2);
console.log(number5);
console.log(others);


const car = {
    make:"Honda",
    model:"Accord",
    engine:{
        capacity:3.6,
        type:"V-6"

    }
};

let {make} = car;
console.log(make);
let{engine , model} = car;
console.log(engine);
console.log(model);



function name1([num1,num2]){
    console.log(num1 + num2);


}
const numbers = [6,4];
name1(numbers);

const books = {
    salesprice:5000,
    costprice:4000
};
function profit({salesprice,costprice}){
    console.log("Profit:  ",salesprice - costprice);
}
profit(books);