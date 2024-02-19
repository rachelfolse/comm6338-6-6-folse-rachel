const button = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".menu");

const setAria = () => {
	let aria = button.getAttribute("aria-expanded");

	if (aria === "false") {
		aria = "true";
	} else {
		aria = "false";
	}
	button.setAttribute("aria-expanded", aria);
};

const showMenu = () => {
	menu.classList.toggle("show-menu");
	setAria();
};

const closeMenu = () => {
	menu.classList.remove("show-menu");
	setAria();
	button.focus();
};

button.onclick = showMenu;

document.onkeyup = (e) => {
	const activeEl = document.activeElement;

	if (e.key === "Escape" && activeEl !== button) {
		closeMenu();
	}
};

document.onclick = (e) => {
	if (!nav.contains(e.target)) {
		closeMenu();
	}
};