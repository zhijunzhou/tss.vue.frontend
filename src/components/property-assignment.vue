<template>
	<div v-if="property">
		<b-card :title="actProp" tag="article" class="mb-12">
			<div class="card-text row">
				<b-card no-block>					
					<div v-for="(factor, idx) in property" class="mb-2">
						<permission-factors :factor="factor" :idx="idx"></permission-factors>
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
  }
}
</script>
