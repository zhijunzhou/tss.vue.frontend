<template>
	<div>
		<div v-for="(op, index) in options" :key="index">
			<input type="checkbox" :value="op.value" v-model="checkedOptions" />
			<label>{{op.text}}</label>
			<br />
		</div>
	</div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: ['options', 'checkedOptions']
}
</script>
