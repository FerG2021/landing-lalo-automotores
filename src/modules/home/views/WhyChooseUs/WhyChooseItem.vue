<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	}
};
</script>

<template>
	<div class="why-choose-container">
		<div class="icon-container">
			<i
				:class="item.icon"
				class="icon"
				style="font-size: 1.5rem"
			></i>
		</div>
		<div class="description-container">
			<h4> {{ item.title }} </h4>
			<p> {{ item.description }} </p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.why-choose-container {
		display: flex;
		align-items: center;
		.icon-container {
			width: 80px;
			display: flex;
			justify-content: center;
			.icon {
				padding: 8px;
				color: var(--primary);
				font-weight: 600;
			}
		}
		.description-container {
			h4 {
				font-weight: 600;
				font-size: 20px;
			}
			p {
				color: var(--grey);
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.why-choose-container {
		display: flex;
		align-items: center;
		.icon-container {
			width: 20%;
			display: flex;
			justify-content: center;
			.icon {
				padding: 8px;
				color: var(--primary);
				font-weight: 600;
			}
		}
		.description-container {
			width: 80%;
			h4 {
				font-weight: 600;
				font-size: 20px;
			}
			p {
				color: var(--grey);
			}
		}
	}
}

</style>