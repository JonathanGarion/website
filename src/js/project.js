"use strict";

let project = () => {
	let projectItem = document.querySelector('.project');
	let projectButtons = document.getElementsByClassName('header__corner');
	let body = document.querySelector('.body');
	let navItems = document.getElementsByClassName('menu__item');
		
	let toggleProject = (event) => {	
		if (projectItem.classList.contains('project--open')) {
			projectItem.classList.replace('project--open', 'project--closed');
			body.classList.remove('body--noscroll');
		} else if (projectItem.classList.contains('project--closed')) {
			projectItem.classList.replace('project--closed', 'project--open');
			body.classList.add('body--noscroll');
		}
	};
	
	let closeProject = (event) => {
		console.log('closeProject');
		if (projectItem.parentNode.classList.contains('project--open')) {
			projectItem.parentNode.classList.replace('project--open', 'project--closed');
			body.classList.remove('body--noscroll');		
		}
	};

	for(let x = 1; x < projectButtons.length; x++) {
		projectButtons[x].addEventListener('click', toggleProject);
	}
	console.log(projectButtons);

	for(let x = 0; x < navItems.length; x++) {
		navItems[x].addEventListener('click', closeProject);
	}
}
project();
