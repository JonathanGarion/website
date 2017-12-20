let project = () => {
	let projectItem = document.querySelector('.project');
	let projectButton = document.querySelector('.header__corner');
	let body = document.querySelector('.body');
	let navItem = document.querySelector('.menu__item');
	
	projectButton.addEventListener('click', toggleProject());
	navItem.addEventListener('click', closeProject());

	let toggleProject = () => {
		if (projectItem.classList.contains('.project--open')) {
			projectItem.classList.replace('.project--open, .project--closed');
		}
		if (projectItem.classList.contains('.project--closed')) {
			projectItem.classList.replace('.project--closed, .project--open');
		}
		body.classList.toggle('.body--noscroll');	
		console.log('after toggleProject');	
	}

	let closeProject = () => {
		console.log('closeProject');
		if (projectItem.classList.contains('.project--open')) {
			projectItem.classList.replace('.project--open, .project--closed');
			body.classList.remove('.body--noscroll');		
		}
	}
}
project();
