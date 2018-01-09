let navigation = () => {
	let navItems = document.getElementsByClassName('menu__item');
	let projectSection = document.querySelector('.projects');
	// let blogSection = document.querySelector('.blogs');
	
	let homeButton = document.getElementsByClassName('emblem');
	let aboutButton = document.getElementsByClassName('about-button');
	let projectButton = document.getElementsByClassName('project-button');
	let blogButton = document.getElementsByClassName('blog-button');

	let aboutAnchor = window.innerHeight;
	let projectAnchor = projectSection.getBoundingClientRect();
	// let blogAnchor = blogsection.getBoundingClientRect();
	
	let scrollToHome = (event) => {
		scrollTo(0, 0);
	};
	let scrollToAbout = (event) => {
		scrollTo(0, aboutAnchor);
	};
	let scrollToProject = (event) => {
		scrollTo(0, projectAnchor.top);
	};
	// let scrollToBlog = (event) => {
	// 	scrollTo(0, blogAnchor.top);
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
}
navigation();
