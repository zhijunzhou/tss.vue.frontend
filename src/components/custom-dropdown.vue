<template>
	<div>
		<b-form-select v-model="selectedOptions" :options="options"></b-form-select>
	</div>
</template>

<script>
export default {
  name: 'CustomDropdown',
  props: ['options', 'selectedOptions']
}
</script>
