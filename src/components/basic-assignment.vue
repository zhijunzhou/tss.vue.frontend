<template>
	<div>
		<div v-for="factor in basic">
			<permission-factors :factor="factor"></permission-factors>
		</div>
	</div>
</template>

<script>
import PermissionFactors from '@/components/permission-factors'

export default {
  name: 'BasicAssignment',
  props: ['basic'],
	components: {
    PermissionFactors
  }
}
</script>
