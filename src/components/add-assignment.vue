<template>	
	<div class="form-group text-right mb-2">
		<b-btn variant="outline-success" @click="addPermissionAssignment">Add Permission Assignment</b-btn>
	</div>
</template>

<script>

export default {
  name: 'AddAssignment',
  props: ['node'],
	methods: {
		addPermissionAssignment: function () {
			this.node.push(this.$store.state.assignmentTempl)
		}
	}
}
</script>
