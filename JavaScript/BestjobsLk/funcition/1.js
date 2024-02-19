function date(){
	document.write(Date());
}
date();
document.write("<br>");

function salary(amount,value){
	var sum = amount * value
	document.write(sum);
}
salary(2,20);
document.write("<br>");
function hello(name,fname){
	return(name + fname);
}

var vlue = hello("chandul","Wickramasinghe");
document.write(vlue);



document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

var name1  = "Dillep";
function name(){
	var name1 = "Amali";
	console.log(name1);
}
name();
console.log(name1);