<template>
	<div>
		<b-nav vertical>
			<b-nav-item @click="switchSection('basic', $event)">All Sections</b-nav-item>
		</b-nav>
	</div>
</template>

<script>

export default {
  name: 'DocumentBasic',
  props: ['odocument'],
	methods: {
    switchSection: function (name, event) {
      this.$emit('update:acsctn', name)
    }
  }
}
</script>
