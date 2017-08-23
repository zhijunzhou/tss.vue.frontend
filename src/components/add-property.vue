<template>	
	<div class="form-group text-right mb-2">
		<b-btn variant="outline-success">Add Property</b-btn>
		{{properties}}
	</div>
</template>

<script>
// no reference
export default {
  name: 'AddProperty',
  props: ['properties']
}
</script>
