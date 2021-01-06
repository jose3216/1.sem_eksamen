window.addEventListener("load", sidenVises);

function sidenVises() {
	document.querySelector("#planter").addEventListener("click", plantOpen)
}

function plantOpen() {
	console.log("plantOpen");
	document.querySelector("#planter").classList.add("clickthrougth")
	document.querySelector("#bund").classList.add("bundpostion");
	document.querySelector("#top").classList.add("toppostion");
	document.querySelector("#jose").classList.add("hide");
}
