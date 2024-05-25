<script>
export default {
	props: {
		record: {
			type: Object,
			required: true
		}
	},
	computed: {
		getClass() {
			return this.record.color === 'primary' ? 'primary-class' : 'secondary-class';
		}
	}
};
</script>

<template>
	<div class="container">
		<div :class="getClass" class="square">
			<i :class="record.icon" style="font-size: 2.5rem"></i>
		</div>
		<div class="description-content">
			<div class="title">
				{{ record.title }}
			</div>
			<div class="subtitle">
				{{ record.subtitle }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	.square {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
		height: 100px;
		width: 100px;
		-webkit-box-shadow: var(--box-shadow-topic);
		-moz-box-shadow: var(--box-shadow-topic);
		box-shadow: var(--box-shadow-topic);
		transition: transform 0.3s ease;
			&:hover {
				transform: scale(1.2);
			}
	}
	.primary-class {
		background: rgb(243,184,56);
		background: linear-gradient(0deg, rgba(243,184,56,1) 0%, rgba(246,205,115,1) 50%, rgba(255,255,255,1) 100%);
		color: var(--secondary-square);
		&:hover {
			background-color: var(--secondary-square) !important;
		}
	}
	.secondary-class {
		background-color: var(--secondary-square);
		&:hover {
			background: rgb(243,184,56);
			background: linear-gradient(0deg, rgba(243,184,56,1) 0%, rgba(246,205,115,1) 50%, rgba(255,255,255,1) 100%);
			color: var(--secondary-square);
		}
	}
	.description-content {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			text-align: center;
			font-weight: 600;
		}
		.subtitle {
			margin-top: 10px;
			text-align: center;
			max-width: 120px;
			color: var(--grey);
		}
	}
}
</style>