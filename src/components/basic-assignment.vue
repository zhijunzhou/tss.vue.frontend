<template>
	<div>
		<div v-for="(factor, idx) in basic" class="mb-2">		
			<permission-factors :factor="factor" :idx="idx" :deleteAssignment="remove"></permission-factors>
		</div>
		<add-assignment :node="basic"></add-assignment>
	</div>
</template>

<script>
import PermissionFactors from '@/components/permission-factors'
import AddAssignment from '@/components/add-assignment'

export default {
  name: 'BasicAssignment',
  props: ['basic'],
	components: {
    PermissionFactors,
		AddAssignment
  },
	methods: {
		remove: function (idx, event) {
			if (confirm('Are you sure to delete this assignment?')) {
				this.basic.splice(idx, 1)
			}
		}
	}
}
</script>
