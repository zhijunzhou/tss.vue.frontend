<template>
	<div>
		<div v-for="(group, index) in groups" :key="index">
			<b-card :title="index" tag="article" class="mb-12">
				<div class="card-text row">
					<div class="col-md-4 pb-2" v-for="user in group.users">
						<b-button size="sm" variant="outline-success">
							{{user.title}}
						</b-button>
					</div>
				</div>
			</b-card>
		</div>
	</div>
</template>

<script>
export default {
  name: 'PermissionGroup',
  props: ['groups']
}
</script>
