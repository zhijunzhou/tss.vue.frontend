<template>
	<div v-if="factor">
		<b-list-group>
			<b-list-group-item>
				<div class="col-md-6 text-left">
						<b>{{factor.permission}} / {{factor.priority}} / {{factor.comment}}</b>		
				</div>
				<div class="col-md-6 text-right">
					<b-btn variant="outline-danger" @click="deleteAssignment(idx, $event)">Delete</b-btn>
					<b-btn v-b-toggle="'collapse_' + idx">Toggle</b-btn>
				</div>
			</b-list-group-item>
			<b-collapse :id="'collapse_' + idx">
				<b-card class="mb-2">
					<div class="card-text row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Permission</label>
								<b-form-select v-model="factor.permission" :options="permissions" class="form-control"></b-form-select>
							</div>
							<div class="form-group">
								<label>Priority</label>
								<b-form-input v-model="factor.priority" type="number"></b-form-input>
							</div>
							<div class="form-group">
								<label>Comment</label>
								<b-form-input v-model="factor.comment" type="text"></b-form-input>
							</div>
							<div class="form-group">
								<label>Pursuit Catalog</label>
								<checkbox-group :options="pursuitCatalogs" :checkedOptions="factor.pursuitClassfication"></checkbox-group>
							</div>
							<div class="form-group">
								<label>Sales Stage</label>
								<checkbox-group :options="salesStages" :checkedOptions="factor.salesStage"></checkbox-group>
							</div>
							<div class="form-group">
								<label>DXC Solution Path</label>
								<checkbox-group :options="dxcSolnPaths" :checkedOptions="factor.dxcSolnPath"></checkbox-group>			
							</div>
							<div class="form-group">
								<label>Involved Offering Families</label>
								<checkbox-group :options="OfferingFamilies" :checkedOptions="factor.involvedOfferingFamilies"></checkbox-group>	
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Roles</label>
								<checkbox-group :options="roles" :checkedOptions="factor.role"></checkbox-group>				
							</div>
							<div class="form-group">
								<label>Groups</label>
								<checkbox-group :options="groups" :checkedOptions="factor.group"></checkbox-group>	
							</div>
						</div>
					</div>
				</b-card>		
			</b-collapse>
		</b-list-group>		
	</div>
</template>

<script>
import CheckboxGroup from '@/components/checkbox-group'

export default {
  name: 'PermissionFactors',
  props: ['factor', 'idx', 'deleteAssignment'],
	data () {
    return {
      pursuitCatalogs: this.$store.state.options.pursuitCatalogs,
			salesStages: this.$store.state.options.salesStages,
			dxcSolnPaths: this.$store.state.options.dxcSolnPaths,
			OfferingFamilies: this.$store.state.options.OfferingFamilies,
			roles: this.$store.state.options.roles,
			groups: this.$store.state.options.groups,
			permissions: this.$store.state.options.permissions
    }
  },
	components: {
    CheckboxGroup
  }
}
</script>
