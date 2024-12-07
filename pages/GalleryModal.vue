<template>
	<VueFinalModal content-class="overlayContent">
		<div class="modalContainer">
			<div class="modalHeader">
				<span class="modalTitle">{{ title }}</span>
				<button class="modalCloseButton" @click="emit('close')" title="Close modal">
					<span class="closeIcon"></span>
				</button>
			</div>
			<Carousel v-bind="modalCarouselOptions">
				<Slide v-for="image in images" :key="image.url">
					<div class="modalItem">
						<NuxtImg :src="image.url" />
						<span>
							{{ image.description }}
						</span>
					</div>
				</Slide>
				<template #addons>
					<Navigation />
					<Pagination />
				</template>
			</Carousel>
		</div>
	</VueFinalModal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const { position } = defineProps<{
	images: { url: string; description: string }[];
	title?: string;
	position?: number;
}>();

const emit = defineEmits<{
	(e: 'close'): void;
}>();

const modalCarouselOptions = {
	itemsToShow: 1,
	wrapAround: true,
	autoplay: 0,
	transition: 750,
	modelValue: position,
};
</script>

<style>
@import url('~/assets/css/modal.css');
</style>
