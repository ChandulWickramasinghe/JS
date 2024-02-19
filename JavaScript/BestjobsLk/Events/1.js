function doSomething(){
	alert("Button Was Clicked");
}
var button = document.getElementById("button");
button.addEventListener("click",doSomething1);

function doSomething1(event){
console.log(event);
}
document.addEventListener("keyup",doSomething2);
function doSomething2(event){
	console.log(event.keyCode);
}

document.write("<br>");
document.write("<br>");
document.write("When I have been Event,Event can Capture");
