class Person{
    
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }
    introduce(){
        console.log(`My name is ${this.fname} ${this.lname}`);
    }
    get fullName(){
        return `${this.fname} ${this.lname}`;
    }

}
class Emplyee extends Person{
    #salary;
    static typingSpeed = 40;
    constructor(fname,lname,position,salary){
        super(lname,fname);
        this.position = position;
        this.#salary = salary;
    }
    introduce(){
        console.log(`My name is ${this.fname} ${this.lname}I am a ${this.position}`);
        this.#showSalary();
    }
    #showSalary(){
        console.log(`My Salary is ${this.#salary}`);
    }
    static showTypingSpeed(){
        console.log(`I can Type ${this.typingSpeed} Words per minute`);
    }
}

const peter = new Person("Peter","Parker");
const tony = new Emplyee("Tony","Stark","Softwear Deverloper",50000);


peter.introduce();
tony.introduce();

tony.salary = 9000;

console.log(tony.salary);
// console.log(tony.showSalary());
console.log(peter.fullName);
console.log(Emplyee.typingSpeed);
Emplyee.showTypingSpeed();
