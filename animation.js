window.addEventListener("load", sidenVises);

function sidenVises() {
	document.querySelector("#burgermenuknap").addEventListener("click", toggleMenu);
}

//burgermenu åbner og lukker
function toggleMenu() {
	console.log("toggleMenu");
	document.querySelector("#burgermenu").classList.toggle("hidden");
	document.querySelector("#burgermenu").classList.toggle("on");

	let erSkjult = document.querySelector("#burgermenu").classList.contains("hidden");

	if (erSkjult == true) {
		document.querySelector("#burgermenuknap").textContent = "☰";
	} else {
		document.querySelector("#burgermenuknap").textContent = "x";
	}
}
