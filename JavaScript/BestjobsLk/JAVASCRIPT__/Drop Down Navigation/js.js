var Navigation = document.getElementById("navigation");
Navigation.addEventListener("change",function(){
	window.open(Navigation.value, "name" , "width=800,height=400");
});