window.addEventListener("load", sidenVises);

function sidenVises() {
	document.querySelector("#planter").addEventListener("click", plantOpen)
}

function myFunction1(x) {
	x.classList.toggle("change");

}
//burgermenu åbner og lukker
function openNav() {
	document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}

function plantOpen() {
	console.log("plantOpen");
	document.querySelector("#planter").classList.add("clickthrougth")
	document.querySelector("#bund").classList.add("bundpostion");
	document.querySelector("#top").classList.add("toppostion");


}
