<template>
	<div>
		<b-nav pills vertical v-for="(section, name) in odocument.sections" :key="name">
			<b-nav-item @click="switchSection(name, $event)" v-if="opportunity[name]">
				({{opportunity[name].sid}}) {{opportunity[name].title}} 
			</b-nav-item>
		</b-nav>
	</div>
</template>

<script>
export default {
  name: 'DocumentSections',
  props: ['odocument', 'acsctn'],
	data () {
    return {
			opportunity: {}
    }
  },
	created () {
		const oppty = this.$store.state.options.opportunity

		for (const sid in oppty) {
			this.opportunity[oppty[sid].name] = {
				sid: sid,
				title: oppty[sid].title,
				fullTitle: oppty[sid].fullTitle,
				path: oppty[sid].path
			}
		}
	},
  methods: {
    switchSection: function (name, event) {
      this.$emit('update:acsctn', name)
    }
  }
}
</script>

<style>
.nav-link.active {
	background-color: #0275d8;
	color: #fff;
}
</style>
