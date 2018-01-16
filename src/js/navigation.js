let navigation = () => {
	let navItems = document.getElementsByClassName('menu__item');
	let aboutSection = document.querySelector('.about-container');
	let projectSection = document.querySelector('.projects');
	// let blogSection = document.querySelector('.blogs');
	
	let homeButton = document.getElementsByClassName('emblem');
	let aboutButton = document.getElementsByClassName('about-button');
	let projectButton = document.getElementsByClassName('project-button');
	let blogButton = document.getElementsByClassName('blog-button');
	let menuButton = document.querySelector('.header-menu__button');
	let header = document.querySelector('.header-mobile');
	let navigation = document.querySelector('.navigation');

	let aboutAnchor = window.innerHeight;
	let projectAnchor = (window.innerHeight + aboutSection.getBoundingClientRect().height);
	// let blogAnchor = (projectAnchor + projectSection.getBoundingClientRect().height);
	
	let scrollToHome = (event) => {
		scrollTo(0, 0);
	};
	let scrollToAbout = (event) => {
		scrollTo(0, aboutAnchor);
	};
	let scrollToProject = (event) => {
		scrollTo(0, projectAnchor);
	};
	// let scrollToBlog = (event) => {
	// 	scrollTo(0, blogAnchor);
	// };


	for(let x = 0; x < homeButton.length; x++) {
		homeButton[x].addEventListener('click', scrollToHome);
	}
	for(let x = 0; x < aboutButton.length; x++) {
		aboutButton[x].addEventListener('click', scrollToAbout);
	}
	for(let x = 0; x < projectButton.length; x++) {
		projectButton[x].addEventListener('click', scrollToProject);
	}
	// for(let x = 0; x < blogButton.length; x++) {
	// 	blogButton[x].addEventListener('click', scrollToAboutBlog);
	// }

	let toggleMenu = (event) => {
		header.classList.toggle('header-mobile--open');
	};
	menuButton.addEventListener('click', toggleMenu);

	let navigationPosition = () => {
		if (window.pageYOffset > (window.innerHeight + 163) ) {
			navigation.classList.add('navigation--fixed');
		}
		else {
			navigation.classList.remove('navigation--fixed');
		}
	}
	window.addEventListener('scroll', navigationPosition);

}
navigation();
