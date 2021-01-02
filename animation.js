window.addEventListener("load", sidenVises);

function sidenVises() {}

function myFunction(x) {
	x.classList.toggle("change");

}
//burgermenu åbner og lukker
function myFunction() {
	document.querySelector("#myLinks").classList.remove("hide");

	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
