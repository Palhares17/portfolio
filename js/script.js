// menu mobile
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
	const nav = document.getElementById("nav");
	nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

//menu active
const links = document.querySelectorAll("#menu li a");

function ativarLink(link) {
	const url = location.href;
	const href = link.href;
	if (url.includes(href)) {
		link.classList.add("active");
	}
}

links.forEach(ativarLink);
// animation
if (window.SimpleAnime) {
	new SimpleAnime();
}
