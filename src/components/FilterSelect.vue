<script>
export default {
	props: {
		records: {
			type: Array,
			required: true
		},
		placeholder: {
			type: String,
			required: true
		},
		value: {
			type: Array,
			required: true
		}
	},
	data() {
		return { selectedItems: this.value };
	},
	methods: {
		changeMultiSelect() {
			this.$emit('selected-items', this.selectedItems);
		},
		resetValue() {
			this.selectedItems = [];
		}
	}
};
</script>

<template>
	<MultiSelect
		v-model="selectedItems"
		display="chip"
		:options="records"
		optionLabel="name"
		:placeholder="placeholder"
		@change="changeMultiSelect()"
	/>
</template>

<style lang="scss" scoped>
.p-multiselect {
	width: 100%;
	margin: 0 10px;
}

</style>