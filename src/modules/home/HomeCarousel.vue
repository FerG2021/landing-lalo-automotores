<script>
import Image1 from './images/lalo1.jpg';
import Image2 from './images/lalo2.jpg';
import Image3 from './images/lalo3.jpg';
import Image4 from './images/s10.webp';

export default {
	data() {
		return {
			Image1: Image1,
			Image2: Image2,
			Image3: Image3,
			Image4: Image4,
			images: [
				Image1,
				Image2,
				Image3,
				Image4
			],
			responsiveOptions: [
				{
					breakpoint: '1400px',
					numVisible: 1,
					numScroll: 1
				},
				{
					breakpoint: '1199px',
					numVisible: 1,
					numScroll: 1
				},
				{
					breakpoint: '767px',
					numVisible: 1,
					numScroll: 1
				},
				{
					breakpoint: '575px',
					numVisible: 1,
					numScroll: 1
				}
			]
		};
	}
};
</script>

<template>
	<Carousel
		:value="images"
		:numVisible="1"
		:numScroll="1"
		:responsiveOptions="responsiveOptions"
		circular
		:autoplayInterval="3000"
		class="carousel"
		:showNavigators="false"
		:showIndicators="false"
	>
		<template #item="slotProps">
			<img
				:src="slotProps.data"
				class="img"
			/>
		</template>
	</Carousel>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
.carousel {
	height: 60vh;
	.img {
		object-fit: fill;
		width: 100%;
		height: 59vh;
	}
}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.carousel {
	height: 40vh;
	.img {
		object-fit: fill;
		width: 100%;
		height: 39vh;
	}
}
}

</style>