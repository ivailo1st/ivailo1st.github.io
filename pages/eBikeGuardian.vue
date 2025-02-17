<template>
	<div class="content">
		<div class="topContent">
			<img src="/images/E-Bike Guardian.jpg" style="width: 100%" />
		</div>
		<div class="middleContent">
			<p>
				This is my Year 1 last project, which was titled "E-Bike Guardian". The premise of this project was to
				use the
				<a href="https://pycom.io/product/pytrack/">PyTrack</a> device combined with the micro-controller
				<a href="https://pycom.io/product/fipy/">FiPy</a>
				to track electronical bikes (E-Bikes) or normal bikes around Aarhus, Denmark and then present the data
				in a webpage by our design. The way I tackled the project was by seeing how the devices operate and to
				make them work by showing locally the data. At first that wasn't hard to do, because the
				<a href="https://pycom.io/product/pytrack/">PyTrack</a> and
				<a href="https://pycom.io/product/fipy/">FiPy</a> both use Python, but when it came down to connecting
				them to the <a href="https://en.wikipedia.org/wiki/LoRa">LoRa</a> network it was a bit hard. It turned
				out in the end that it took a little while for the devices to establish connection to the network due to
				it being their first time, but after that connection to the network was faster. Here is the code that I
				used to make that connection happen:
				<a href="https://drive.google.com/file/d/1eDJ3az0toP0gePzy7qtodN38NUY1ECmf/view?usp=sharing">
					The Code
				</a>
				.
			</p>
			<p>
				Afterwards, I began working on the
				<a href="https://en.wikipedia.org/wiki/LoRa">LoRa</a> network so that I can transfer data from the
				network to a IoT Database in my case being <a href="https://cloud.google.com/sql/">Google Cloud</a>. At
				first it wasn't easy finding a clear and a simple method of doing this task, but after a while I found
				<a href="https://nodered.org/">Node-Red</a> which was a tool that had the capibilities to transfer data
				from one thing to another one and is also part of <a href="https://nodejs.org/en/">Node.JS</a>. The way
				this tool works is by prompting the user to draw his own schematic, which enables him to have a clear
				overview of his work. The user interface is very user friendly and
				<a href="https://nodered.org/">Node-Red</a> itself is very easy to pick up and use. It also supports
				different modules that help the user accomplish more tasks easier. Here is my schematic:
				<a href="https://drive.google.com/file/d/1HKV7nthhwC501hJFrWfE2nOuMuYnHLgq/view?usp=sharing">JSON</a>
				and
				<a href="https://drive.google.com/open?id=1tPD79sFoptnAuq9znZtQ4piXKsVulzuc">Picture</a>.
			</p>
			<p>
				Lastly, it was the last part of the project and that was to show the data on a map. The way I did it was
				by using
				<a href="https://openlayers.org/">OpenLayers</a> and <a href="http://flask.pocoo.org/">Python-Flask</a>.
				<a href="http://flask.pocoo.org/">Python-Flask</a> was used to deploy the website and also to extract
				the data from the IoT database, while <a href="https://openlayers.org/">OpenLayers</a> was used to
				display the data on a map. On top of that I created a few more functionalities that helped improve the
				website. The first one was connected with the map. It made it so that
				<a href="https://openlayers.org/">OpenLayers</a> only showed the last received coordinates of the bikes
				rather than their whole path and also enabled the user to be able to look up a specific bike.The second
				functionality was connected with the website as a whole. It was the ability of users to register and
				login with which access was restricted to those who didn't register and where only guest. From there on
				I created a role based system on where normal users could only look up the last position of the bikes
				while the admins could see the whole bike paths. The last functionality I created was connected with the
				bikes. It was the ability of users to rent different bikes by telling them if they are free or they are
				rented by another user and if they are free they rent them. Here is the code:
				<a href="https://drive.google.com/file/d/1FbQGYRGo98QpkGyrtaT4TJ_V-LU4u-4z/view?usp=sharing">Code</a>.
			</p>
		</div>
		<div class="bottomContent">
			<h1>Pictures of The Project</h1>
			<div class="gallery">
				<button class="galleryButton" @click="handleOpenGallery(0)" title="Open Gallery">
					<NuxtImg src="/images/Map.jpg" />
				</button>
				<button class="galleryButton" @click="handleOpenGallery(1)" title="Open Gallery">
					<NuxtImg src="/images/TheWebsite.JPG" />
				</button>
				<button class="galleryButton" @click="handleOpenGallery(2)" title="Open Gallery">
					<NuxtImg src="/images/Roles.png" />
				</button>
				<button class="galleryButton" @click="handleOpenGallery(3)" title="Open Gallery">
					<NuxtImg src="/images/Login.jpg" />
				</button>
			</div>
			<ModalsContainer />
			<NuxtLink to="myCV" class="topBorder">
				<button class="backButton" style="vertical-align: middle">
					<span>Back To CV </span>
				</button>
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ModalsContainer, useModal } from 'vue-final-modal';
import GalleryModal from './GalleryModal.vue';

const attributes = ref({
	title: 'E-Bike Guardian Gallery',
	images: [
		{ url: '/images/Map.jpg', description: 'The Website Map without CSS' },
		{ url: '/images/TheWebsite.JPG', description: 'The Website with CSS' },
		{ url: '/images/Roles.png', description: 'The Roles function without CSS' },
		{ url: '/images/Login.jpg', description: 'The Login function without CSS' },
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
