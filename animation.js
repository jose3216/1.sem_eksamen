window.addEventListener("load", sidenVises);

function sidenVises() {
	document.querySelector("#planter").addEventListener("click", plantOpen)
}


//burgermenu åbner og lukker
function openNav() {
	document.getElementById("myNav").style.height = "100%";
	document.querySelector("#burgermenu").classList.add("change");
}

function closeNav() {
	document.getElementById("myNav").style.height = "0%";
	document.querySelector("#burgermenu").classList.remove("change");
}

function plantOpen() {
	console.log("plantOpen");
	document.querySelector("#planter").classList.add("clickthrougth")
	document.querySelector("#bund").classList.add("bundpostion");
	document.querySelector("#top").classList.add("toppostion");
	document.querySelector("#jose").classList.add("hide");


}
