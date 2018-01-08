// get anchor classes 
// get navigation elements 
// get y pos of anchors 
// onclick jump to y pos 

let navigation = () => {
	let projectAnchor = document.getElementsByClassName('projects');
	let aboutAnchor = document.getElementsByClassName('about-container');
	let blogAnchor = document.getElementsByClassName('blogs');
	let navItems = document.getElementsByClassName('menu__item');

}
navigation();









// document.getElementsByClassName('home__block--button')[0].addEventListener('click', function() {
// 	var SCROLL_SPEED = 11;
// 	var scrollHorizontal = true;
// 	var i;
// 	var scrollDistance = window.innerWidth;

// 	if (window.innerWidth > window.innerHeight) {
// 		i = window.scrollX ? window.scrollX : document.documentElement.scrollLeft;
// 	} else {
// 		scrollHorizontal = false;
// 		scrollDistance = window.innerHeight;
// 		i = window.scrollY ? window.scrollY : document.documentElement.scrollTop;
// 	}

// 	var interval = window.setInterval( function() {
// 		if( scrollHorizontal ) {
// 			window.scrollTo(i, 0);
// 		} else {
// 			window.scrollTo(0, i);
// 		}

// 		i = Math.min(i + SCROLL_SPEED, scrollDistance + SCROLL_SPEED);
// 		if( i >= scrollDistance + SCROLL_SPEED ){
// 			window.clearInterval(interval);
// 		}
// 	}, 1);
// });