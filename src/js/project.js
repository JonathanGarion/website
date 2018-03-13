"use strict";

(() => {
	let projectItems = document.getElementsByClassName('project');
	let projectButtons = document.getElementsByClassName('header__corner');
	let body = document.querySelector('.body');
	let navItems = document.getElementsByClassName('menu__item');
	//used for safari to bypass hover dependant button on mobile
	let altButton = document.getElementsByClassName('project__description');
		
	let toggleProject = (project) => {	
		if (project.classList.contains('project--open')) {
			project.classList.remove('project--open');
			project.classList.add('project--closed');
			body.classList.remove('body--noscroll');
		} else if (project.classList.contains('project--closed')) {
			project.classList.remove('project--closed');
			project.classList.add('project--open');
			body.classList.add('body--noscroll');
		}
	};
	
	let closeProject = (project) => {
		for(let x = 0; x < projectItems.length; x++) {
			projectItems[x].classList.remove('project--open')
			projectItems[x].classList.add('project--closed')
		}

		body.classList.remove('body--noscroll');
	};

	for(let x = 1; x < projectButtons.length; x++) {
		projectButtons[x].addEventListener('click', () => toggleProject(projectItems[x-1]) );
	}
	
	for(let x = 0; x < navItems.length; x++) {
		navItems[x].addEventListener('click', () => closeProject(projectItems[x]) );
	}
	
	//used for safari to bypass hover dependant button on mobile
	let openProject = (project) => {
		if (project.classList.contains('project--closed')) {
			project.classList.remove('project--closed');
			project.classList.add('project--open');
			body.classList.add('body--noscroll');
		}
	};

	//used for safari to bypass hover dependant button on mobile
	for(let x = 0; x < altButton.length; x++) {
		altButton[x].addEventListener('click', () => toggleProject(projectItems[x]) );
	}
})()
