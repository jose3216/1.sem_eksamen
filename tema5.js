window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("sidenVises");
	if (x.matches) {

		document.querySelector("#aurelia_after").classList.remove("hide");
		document.querySelector("#aurelia_before").classList.remove("hide");

	} else {
		document.querySelector("#aurelia_after").classList.add("hide");
		document.querySelector("#aurelia_before").addEventListener("click", skiftTilAfter);

	}
}

var x = window.matchMedia("(max-width: 700px)");
sidenVises(x); // Call listener function at run time
x.addListener(sidenVises);

function skiftTilAfter() {
	console.log("skiftTilAfter");

	document.querySelector("#aurelia_before").removeEventListener("click", skiftTilAfter);
	document.querySelector("#aurelia_before").classList.add("hide");
	document.querySelector("#aurelia_after").classList.remove("hide");

	document.querySelector("#aurelia_after").addEventListener("click", skiftTilBefore);
}

function skiftTilBefore() {
	console.log("skiftTilBefore");
	document.querySelector("#aurelia_after").removeEventListener("click", skiftTilBefore);

	document.querySelector("#aurelia_after").classList.add("hide");
	document.querySelector("#aurelia_before").classList.remove("hide");

	document.querySelector("#aurelia_before").addEventListener("click", skiftTilAfter);
}
