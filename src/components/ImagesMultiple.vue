<script>
export default {
	props: {
		images: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			openGalleria: false,
			imagesGalleria: null,
			responsiveOptions: [
				{
					breakpoint: '1500px',
					numVisible: 5
				},
				{
					breakpoint: '1024px',
					numVisible: 3
				},
				{
					breakpoint: '768px',
					numVisible: 2
				},
				{
					breakpoint: '560px',
					numVisible: 1
				}
			]
		};
	},
	computed: {
		firstImage() {
			return this.images[0];
		},
		screenWidth() {
			return window.innerWidth;
		},
		screenHeight() {
			return window.innerHeight;
		},
		imageStyle() {
			return this.screenWidth < 800 ? `object-fit: cover; width: ${this.screenWidth - 50}px; height: ${this.screenHeight - 200}px` : 'object-fit: fill; height: 80vh';
		}
	},
	methods: {
		clickOpenImages() {
			this.openGalleria = true;
		}
	}
};
</script>

<template>
	<div class="images-multiple-main-container">
		<img
			:src="firstImage"
			alt="Image"
			class="image"
			@click="clickOpenImages(item)"
		/>
		<Galleria
			v-model:visible="openGalleria"
			:value="images"
			:circular="true"
			:fullScreen="true"
			:showItemNavigators="true"
		>
			<template #item="slotProps">
				<img
					:src="slotProps.item"
					:alt="slotProps.item"
					:style="imageStyle"
				/>
			</template>
			<template #thumbnail="slotProps">
				<img
					:src="slotProps.item"
					:alt="slotProps.item"
					style="display: block; height: 5vh;"
				/>
			</template>
		</Galleria>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.images-multiple-main-container {
		&:hover {
			opacity: .8;
		}
		.image {
			border-radius: 8px;
			box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
			padding: 3px;
			height: 100%;
			width: 100%;
			cursor: pointer;
			object-fit: contain;
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.images-multiple-main-container {
		&:hover {
			opacity: .8;
		}
		.image {
			border-radius: 8px;
			box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
			padding: 3px;
			height: 100%;
			width: 100%;
			cursor: pointer;
			object-fit: contain;
		}
	}
}

</style>