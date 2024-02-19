var MainHeading = document.getElementById("main-Heading");
MainHeading.innerText = "Hello World";

var tableRow = document.getElementsByClassName("odd");
for(i = 1; i < 5;i++){
	tableRow[i].style.background = "yellow";
}

// var TextChange = document.getElementsByTagName("h2");
// for(x = 0;x < 5;x++){
// 	TextChange[x].style.color = "red";
// }
document.write("<br>");
var listName = document.querySelectorAll("#list");
listName[0].innerHTML = listName[0].innerHTML + "<li>List 5</li>";