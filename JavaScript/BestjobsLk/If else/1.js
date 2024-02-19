var hour = 12;

if(hour > 18){
console.log("Good Afternoon!");
}else if(hour >= 12){
console.log("Good Evening!");
}else{
console.log("Good Morning");
}

//Short Version of  If else

hour >= 12 ? console.log("Good Afternoon!") : console.log("Good Morning!");

//Short Version of If else id and else
hour > 18 ? console.log("Good Afternoon") : hour >= 12 ? console.log("Good Evening") : console.log("Good Morning");