<template>
	<div>
		<b-nav pills vertical v-for="(prop0, p) in properties" :key="p">
			<b-nav-item @click="switchProp(p, $event)">{{p}}</b-nav-item>
		</b-nav>
	</div>
</template>

<script>
export default {
  name: 'SectionProperties',
  props: ['properties', 'actProp'],
	methods: {
    switchProp: function (p, event) {
      this.$emit('update:actProp', p)
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
