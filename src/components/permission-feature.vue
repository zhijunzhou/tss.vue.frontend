<template>
	<div>
		<div v-for="(ft, index) in features" :key="index">
			<b-card :title="index" tag="article" class="mb-12">
				<b-form-fieldset>
					<div role="group">
						<div class="card-text" v-for="(g, gpname) in groups">
							<input type="checkbox" :value="gpname" name="groupname" v-model="ft.groups" />
								<label>{{gpname}}</label>
							<br>
						</div>
					</div>
				</b-form-fieldset>
			</b-card>
		</div>
	</div>
</template>

<script>
export default {
  name: 'PermissionFeature',
  props: ['features', 'groups']
}
</script>
