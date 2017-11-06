<?php require_once'build/sections/header.php'?>
<section class="projects">
	<h2 class="projects__title">projects</h2>
	<ul class="projects__grid">
		<li class="projects__grid__item"><span class="grid-title">project 1</span></li>
		<li class="projects__grid__item"><span class="grid-title">project 2</span></li>
		<li class="projects__grid__item"><span class="grid-title">project 3</span></li>
		<li class="projects__grid__item"><span class="grid-title">project 4</span></li>
		<li class="projects__grid__item"><span class="grid-title">project 5</span></li>
		<li class="projects__grid__item"><span class="grid-title">project 6</span></li>
		<li class="projects__grid__item"><span class="grid-title">project 7</span></li>
		<li class="projects__grid__item"><span class="grid-title">project 8</span></li>
		<li class="projects__grid__item"><span class="grid-title">project 9</span></li>
	</ul>
</section>
<?php require_once'build/sections/navigation.php'?>


<!-- load in on click of grid__item -->
<div class="project">
	<header class="project__header">
		<svg></svg>
		<div class="project__close-corner">
			<span class="project__close-corner__button"></span>
		</div>
	</header>
	<aside class="project__description">
		<h3 class="project__title">title of the project</h3>
		<p class="project__text">
			Lorem ipsum dolor sit amet, consectetur
			adipiscing elit. Maecenas nec elit efficitur
			nibh pellentesque rhoncus. Sed
			condimentum hendrerit eleifend. Mauris ut
			fermentum sapien. Curabitur ex odio,
			congue sodales tempus sit amet, aliquet id
			enim. Aenean porttitor libero ante, vel
			pellentesque arcu laoreet ac. Suspendisse
			hendrerit vehicula malesuada. Mauris ac ex
			eros. Proin molestie semper magna, vitae
			molestie massa malesuada vel. Maecenas
			malesuada sollicitudin turpis at iaculis.
			Nam vitae libero elit. Nam sit amet lacinia
			dui, finibus euismod dolor. Etiam eu elit nec 
		</p>
	</aside>
	<aside class="project__skills">
		<h3 class="project__title">used skills</h3>
		<ul class="project__list">
			<li class="project__list__item"></li>
			<li class="project__list__item"></li>
			<li class="project__list__item"></li>
			<li class="project__list__item"></li>
			<li class="project__list__item"></li>
		</ul>
	</aside>
	<?php require_once'build/sections/navigation.php'?>
</div>
