<template>
	<div>
		<b-card :title="name" tag="article" class="mb-12">
			<div class="card-text row" v-if="section.basic">
				<b-card no-block>
					<b-tabs small card ref="tabs">
						<b-tab title="Basic" v-if="section.basic">
							<div v-for="factor in section.basic">
								<permission-factors :factor="factor"></permission-factors>
							</div>
						</b-tab>
						<b-tab title="Properties">
							<div class="row">
								<div class="col-md-2 text-nowrap">
									<section-properties :properties="section.properties" :actProp.sync="activedProp"></section-properties>
								</div>
								<div class="col-md-10" v-if="activedProp">
									<property-assignment :property="section.properties[activedProp]" :actProp="activedProp"></property-assignment>
								</div>
							</div>
						</b-tab>
					</b-tabs>
				</b-card>
			</div>
		</b-card>
	</div>
</template>

<script>
import PermissionFactors from '@/components/permission-factors'
import SectionProperties from '@/components/section-properties'
import PropertyAssignment from '@/components/property-assignment'

export default {
  name: 'SectionAssignment',
  props: ['section', 'name'],
  data () {
    return {
			activedProp: undefined
		}
	},
	components: {
    PermissionFactors,
		SectionProperties,
		PropertyAssignment
  }
}
</script>
