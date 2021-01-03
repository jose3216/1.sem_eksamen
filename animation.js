window.addEventListener("load", sidenVises);

function sidenVises() {
	document.querySelector("#planter").addEventListener("click", plantOpen)
}

function myFunction(x) {
	x.classList.toggle("change");

}
//burgermenu åbner og lukker
function myFunction(x) {
	document.querySelector("#myLinks").classList.remove("hide");

	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function plantOpen() {
	console.log("plantOpen");
	document.querySelector("#planter").classList.add("clickthrougth");
	document.querySelector("#bund").classList.add("bundpostion");
	document.querySelector("#top").classList.add("toppostion");


}
