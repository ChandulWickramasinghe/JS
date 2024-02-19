var showPassword = false;
var eyeq = document.getElementById("eyeq");
var password = document.getElementById("password");
eyeq.addEventListener("click",function(){
	if(showPassword == false){
	password.setAttribute("type","text");
	// eyeq.classList.add("fa-regular fa-eye-slash");
	// eyeq.classList.remove("fa-regular fa-eye");
	 showPassword = true;
}else{
	password.setAttribute("type","password");
	// eyeq.classList.remove("fa-regular fa-eye-slash");
	// eyeq.classList.add("fa-regular fa-eye");
	showPassword = false;
}
});