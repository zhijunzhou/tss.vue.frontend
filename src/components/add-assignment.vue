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
			const tpl = {
				'permission': 'write',
				'priority': 0,
				'govTrack': [],
				'pursuitClassfication': [],
				'dxcSolnPath': [],
				'involvedOfferingFamilies': [],
				'gbu': [],
				'salesStage': [],
				'role': [],
				'group': [],
				'comment': null
			}
			this.node.push(tpl)
		}
	}
}
</script>
