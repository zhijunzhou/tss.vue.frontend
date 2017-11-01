<template>
	<div v-if="factor">
		<b-list-group>
			<b-list-group-item>
				<div class="row">
					<div class="col-md-6 text-left">
							<b>{{factor.permission}} / {{factor.priority}} / {{factor.comment}}</b>		
					</div>
					<div class="col-md-6 text-right">
						<b-btn variant="outline-danger" @click="deleteAssignment(idx, $event)">Delete</b-btn>
						<b-btn variant="outline-primary" v-b-toggle="'collapse_' + idx">Toggle</b-btn>
					</div>
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
								<div v-for="(op, index) in pursuitCatalogs" :key="index">
									<input type="checkbox" :value="op.value" v-model="factor.pursuitClassfication" />
									<label>{{op.text}}</label>
								</div>
							</div>
							<div class="form-group">
								<label>Sales Stage</label>
								<div v-for="(op, index) in salesStages" :key="index">
									<input type="checkbox" :value="op.value" v-model="factor.salesStage" />
									<label>{{op.text}}</label>
								</div>
							</div>
							<div class="form-group">
								<label>DXC Solution Path</label>
								<div v-for="(op, index) in dxcSolnPaths" :key="index">
									<input type="checkbox" :value="op.value" v-model="factor.dxcSolnPath" />
									<label>{{op.text}}</label>
								</div>
							</div>
							<div class="form-group">
								<label>Involved Offering Families</label>
								<div v-for="(op, index) in OfferingFamilies" :key="index">
									<input type="checkbox" :value="op.value" v-model="factor.involvedOfferingFamilies" />
									<label>{{op.text}}</label>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Roles</label>
								<div v-for="(op, index) in roles" :key="index">
									<input type="checkbox" :value="op.value" v-model="factor.role" />
									<label>{{op.text}}</label>
								</div>
							</div>
							<div class="form-group">
								<label>Groups</label>
								<div v-for="(op, index) in groups" :key="index">
									<input type="checkbox" :value="op.value" v-model="factor.group" />
									<label>{{op.text}}</label>
								</div>
								<!--<checkbox-group :options="groups" :checkedOptions="factor.group"></checkbox-group>-->	
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
