<script>
import HomeCarousel from './HomeCarousel.vue';
import FeaturedCars from './views/FeaturedCars/FeaturedCars.vue';
import ResumeSection from './views/ResumeSection/ResumeSection.vue';
import WhyChooseUs from './views/WhyChooseUs/WhyChooseUs.vue';

export default {
	name: 'HomeComponent',
	components: {
		ResumeSection,
		HomeCarousel,
		FeaturedCars,
		WhyChooseUs
	}
};
</script>

<template>
	<div>
		<HomeCarousel />
		<ResumeSection />
		<FeaturedCars />
		<WhyChooseUs />
	</div>
</template>

<style>

</style>