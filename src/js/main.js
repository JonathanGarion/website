console.log("js.main");

let openClose = () => {
	let emblem = document.querySelectorAll('.emblem');
	let header = document.querySelectorAll('.header');
	let closeButton = document.querySelectorAll('header__close-button');
	let addClass = header.classList.add("header--close");
	let removeClass = header.classList.remove("header--close");

	emblem.addEventListener("click", addClass);
	closeButton.addEventListener("click", removeClass);
}
