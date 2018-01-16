"use strict";

(() => {
	let projectItems = document.getElementsByClassName('project');
	let projectButtons = document.getElementsByClassName('header__corner');
	let body = document.querySelector('.body');
	let navItems = document.getElementsByClassName('menu__item');
		
	let toggleProject = (project) => {	
		if (project.classList.contains('project--open')) {
			project.classList.replace('project--open', 'project--closed');
			body.classList.remove('body--noscroll');
		} else if (project.classList.contains('project--closed')) {
			project.classList.replace('project--closed', 'project--open');
			body.classList.add('body--noscroll');
		}
	};
	
	let closeProject = (project) => {
		for(let x = 0; x < projectItems.length; x++) {
			projectItems[x].classList.replace('project--open', 'project--closed')
		}

		body.classList.remove('body--noscroll');
	};

	for(let x = 1; x < projectButtons.length; x++) {
		projectButtons[x].addEventListener('click', () => toggleProject(projectItems[x-1]) );
	}

	for(let x = 0; x < navItems.length; x++) {
		navItems[x].addEventListener('click', () => closeProject(projectItems[x]) );
	}

})()
