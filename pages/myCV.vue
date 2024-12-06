<template>
	<div class="headContent">
		<div class="name">
			<h1>Ivaylo Georgiev</h1>
			<h2>Web Developer</h2>
		</div>
		<div class="persInfo">
			<ul>
				<li><NuxtLink to="/">Back to Main Site</NuxtLink></li>
				<li>
					<a href="mailto:Ivailo2nd@gmail.com" rel="nofollow">Ivailo2nd@gmail.com</a>
				</li>
				<li>
					<p>+45 42 80 04 72</p>
				</li>
			</ul>
		</div>
	</div>
	<div class="container">
		<div class="topContent">
			<div class="topLeft">
				<h1>Personal Information</h1>
				<div class="topLeftImageContainer">
					<img src="/images/PersPhoto.jpg" />
					<ul>
						<li>
							<p><strong>Nationality:</strong></p>
							<p>Bulgarian</p>
						</li>
						<li>
							<p><strong>Date of Birth:</strong></p>
							<p>The 29th of October 1999</p>
						</li>
						<li>
							<p><strong>Address:</strong></p>
							<p>Fredensvej, 2 tv., Viby J, DK</p>
						</li>
						<li>
							<p><strong>Spoken Languages:</strong></p>
							<p>
								Bulgarian - <strong>Native</strong>, English - <strong>C2</strong>, Russian -
								<strong>B1</strong>, Danish -
								<strong>B1</strong>
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="topRight">
				<h1>Education</h1>
				<ul>
					<li>
						<p><strong>2006-2018</strong></p>
						<p>Linguistic and ICT studies at Secondary School "St. Kliment Ohridski", Troyan</p>
					</li>
					<li>
						<p><strong>2018-2020</strong></p>
						<p>ITEK at Business Academy Aarhus</p>
					</li>
					<li>
						<p><strong>2020-2022</strong></p>
						<p>Web Development at Business Academy Aarhus</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="middleContent">
			<h1>My Work</h1>
			<Carousel v-bind="carouselConfig">
				<Slide key="item1">
					<div class="carousel__item">
						<NuxtLink to="/eBikeGuardian">
							<img src="/images/E-Bike Guardian.jpg" />
						</NuxtLink>
					</div>
				</Slide>
				<Slide key="item2">
					<div class="carousel__item">
						<NuxtLink to="/miniProject">
							<img src="/images/Mini Logo Alt.jpg" />
						</NuxtLink>
					</div>
				</Slide>
				<Slide key="item3">
					<NuxtLink to="/anniversary30">
						<img src="/images/30th Anniversary Logo.jpg" />
					</NuxtLink>
				</Slide>

				<template #addons>
					<Navigation />
					<Pagination />
				</template>
			</Carousel>
		</div>
		<div class="bottomContent">
			<div class="bottomLeft">
				<h1>Skills and Experience</h1>
				<ul>
					<li>
						<p><strong>Excellent:</strong></p>
						<p>
							HTML, JavaScript, CSS, Tailwind, TypeScript, React, Node.js, WordPress, MySQL/PostgreSQL,
							Office suite (MS Word, MS Excel, MS PowerPoint)
						</p>
					</li>
					<li>
						<p><strong>Good:</strong></p>
						<p>Python, C#, Java, ASP.NET, PHP, Angular, jQuery, Umbraco, Redux,Vue.js</p>
					</li>
					<li>
						<p><strong>Average:</strong></p>
						<p>C++, C, Kotlin</p>
					</li>
					<li>
						<p><strong>Vague:</strong></p>
						<p>Pascal, Visual Basic</p>
					</li>
				</ul>
			</div>
			<div class="bottomRight">
				<h1>Achievements</h1>
				<p>Participation in the National Olympiad of 2015</p>
				<p>
					Participation in various IT and linguistic related events and competitions in the municipality of
					Troyan, Bulgaria
				</p>
				<p>Cambridge Certificate in Advanced English (CAE) with a Grade B</p>
				<h1>Hobbies and Interests</h1>
				<p>Robotics, Sciencie Fiction, Fantasy, Movies, Video Games, Reading</p>
			</div>
		</div>
	</div>
	<div></div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const route = useRoute();
const carouselConfig = {
	itemsToShow: 1,
	wrapAround: true,
	autoplay: 5000,
	transition: 750,
	pauseAutoplayOnHover: true,
};
</script>
<style scoped>
@import url('~/assets/css/cvPage.css');
</style>
