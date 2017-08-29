<template>
	<div v-if="section && section.basic">
		<b-card tag="article" class="mb-12">
			<div class="row">
				<div class="col-md-6 text-left">
					<h3>{{name}}</h3>
				</div>
			</div>
			<div class="card-text row" v-if="section && section.basic">
				<b-card no-block>
					<b-tabs small card ref="tabs">
						<b-tab title="Basic" v-if="section.basic">
							<div v-for="(factor, idx) in section.basic" class="mb-2">
								<permission-factors :factor="factor" :idx="idx" :deleteAssignment="remove"></permission-factors>
							</div>
							<add-assignment :node="section.basic"></add-assignment>
						</b-tab>
						<b-tab title="Properties">
							<div class="row">
								<div class="col-md-2 text-nowrap">
									<div class="form-group text-left mb-2">
										<b-btn variant="outline-success" @click="addProperty">Add Property</b-btn>
									</div>
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
import AddAssignment from '@/components/add-assignment'

export default {
  name: 'SectionAssignment',
  props: ['section', 'name'],
  data () {
    return {
			activedProp: undefined
		}
	},
	methods: {
		addProperty: function () {
			var keys = []
			if (typeof this.section.properties === 'object') {
				keys = Object.keys(this.section.properties)
				this.$set(this.section.properties, 'new' + keys.length, [this.$store.state.assignmentTempl])
			}
		},
		remove: function (idx, event) {
			if (confirm('Are you sure to delete this assignment?')) {
				this.section.basic.splice(idx, 1)
			}
		}
	},
	components: {
    PermissionFactors,
		SectionProperties,
		PropertyAssignment,
		AddAssignment
  }
}
</script>
