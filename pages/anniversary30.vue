<template>
	<div class="content">
		<div class="topContent">
			<img src="/images/30th Anniversary Logo.jpg" />
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
				<button class="galleryButton" @click="handleOpenGallery(0)" title="Open Gallery">
					<NuxtImg src="/images/Web1.jpg" />
				</button>
				<button class="galleryButton" @click="handleOpenGallery(1)" title="Open Gallery">
					<NuxtImg src="/images/Web2.jpg" />
				</button>
				<button class="galleryButton" @click="handleOpenGallery(2)" title="Open Gallery">
					<NuxtImg src="/images/Web3.jpg" />
				</button>
				<button class="galleryButton" @click="handleOpenGallery(3)" title="Open Gallery">
					<NuxtImg src="/images/Web4.jpg" />
				</button>
				<button class="galleryButton" @click="handleOpenGallery(4)" title="Open Gallery">
					<NuxtImg src="/images/Web5.jpg" />
				</button>
				<button class="galleryButton" @click="handleOpenGallery(5)" title="Open Gallery">
					<NuxtImg src="/images/Web7.jpg" />
				</button>
			</div>
			<ModalsContainer />
			<NuxtLink to="/myCV" class="topBorder">
				<button class="backButton" style="vertical-align: middle"><span>Back To CV </span></button>
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ModalsContainer, useModal } from 'vue-final-modal';
import GalleryModal from './GalleryModal.vue';

const attributes = ref({
	title: '30th Anniversary Gallery',
	images: [
		'/images/Web1.jpg',
		'/images/Web2.jpg',
		'/images/Web3.jpg',
		'/images/Web4.jpg',
		'/images/Web5.jpg',
		'/images/Web7.jpg',
	],
	position: 0,
	onClose() {
		close();
	},
});

const { open, close } = useModal({
	component: GalleryModal,
	attrs: attributes.value,
	slots: {
		default: '',
	},
});

const handleOpenGallery = (p: number) => {
	attributes.value.position = p;
	open();
};
</script>

<style scoped>
@import url('~/assets/css/projectPages.css');
</style>
