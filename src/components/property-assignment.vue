<template>
	<div v-if="property">
		<b-card :title="actProp" tag="article" class="mb-12">
			<div class="card-text row">
				<b-card no-block>					
					<div v-for="(factor, idx) in property" class="mb-2">
						<permission-factors :factor="factor" :idx="idx" :deleteAssignment="remove"></permission-factors>
					</div>
					<add-assignment :node="property"></add-assignment>
				</b-card>
			</div>
		</b-card>
	</div>
</template>

<script>
import PermissionFactors from '@/components/permission-factors'
import AddAssignment from '@/components/add-assignment'

export default {
  name: 'PropertyAssignment',
  props: ['property', 'actProp'],
	components: {
    PermissionFactors,
		AddAssignment
  },
	methods: {
		remove: function (idx, event) {
			if (confirm('Are you sure to delete this assignment?')) {
				this.property.splice(idx, 1)
			}
		}
	}
}
</script>
