<template>
	<div class="content">
		<div class="topContent">
			<img src="../assets/images/30th Anniversary Logo.jpg" />
		</div>
		<div class="middleContent">
			<p>
				This project was a more simple one than the other two due to its simplistic idea of representing my
				former
				<a href="http://www.svetikliment.com/">school</a> using
				<a href="https://en.wikipedia.org/wiki/HTML">HTML</a> ,
				<a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">CSS</a>,
				<a href="https://en.wikipedia.org/wiki/PHP">PHP</a> and some
				<a href="https://en.wikipedia.org/wiki/JavaScript">Javascript</a>. The site itself was made in a way
				that it can be dynamically updated without messing up the whole style of website. This is done by
				seperating the site into a few php pieces where each corresponds to a specific part of the website.
				Furthermore, the project contains information about the school and a functioning javascript gallery
				where a user can easily navigate and see the different pictures connected to the project and the school
				itself. While the website in itself doesnt have a grand idea behind it still reached the National
				Olympiad of 2016.
			</p>
		</div>
		<div class="bottomContent">
			<h1>Pictures of The Project</h1>
			<div class="gallery">
				<a data-fancybox="gallery" data-caption="The main website page" href="../assets/images/Web1.jpg">
					<img src="../assets/images/Web1.jpg" />
				</a>
				<a
					data-fancybox="gallery"
					data-caption="The page that shows the founder of the schools and some information about him"
					href="../assets/images/Web2.jpg"
				>
					<img src="../assets/images/Web2.jpg" />
				</a>
				<a
					data-fancybox="gallery"
					data-caption="The top part of the page that shows various activities and events of the school"
					href="../assets/images//Web3.jpg"
				>
					<img src="../assets/images/Web3.jpg" />
				</a>
				<a
					data-fancybox="gallery"
					data-caption="The bottom part of the page that shows various activities and events of the school"
					href="../assets/images/Web4.jpg"
				>
					<img src="../assets/images/Web4.jpg" />
				</a>
				<a
					data-fancybox="gallery"
					data-caption="The page that containts the reason behind the making of the website and project itself"
					href="../assets/images/Web5.jpg"
				>
					<img src="../assets/images/Web5.jpg" />
				</a>
				<a
					data-fancybox="gallery"
					data-caption="The page that contains the gallery"
					href="../assets/images/Web7.jpg"
				>
					<img src="../assets/images/Web7.jpg" />
				</a>
			</div>
			<NuxtLink to="/myCV">
				<button class="button" style="vertical-align: middle"><span>Back To CV </span></button>
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
@import url('~/assets/css/projectPages.css');
</style>
