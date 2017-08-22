<template>
	<div v-if="property">
		<b-card :title="actProp" tag="article" class="mb-12">
			<div class="card-text row">
				<b-card no-block>					
					<div v-for="factor in property">
						<permission-factors :factor="factor"></permission-factors>
					</div>
				</b-card>
			</div>
		</b-card>
	</div>
</template>

<script>
import PermissionFactors from '@/components/permission-factors'

export default {
  name: 'PropertyAssignment',
  props: ['property', 'actProp'],
	components: {
    PermissionFactors
  }
}
</script>
