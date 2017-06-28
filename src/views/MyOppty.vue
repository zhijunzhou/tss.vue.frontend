<template>
  <div>
  	My Oppty
    <router-link :to="{path: '/cs/' + oppty.opptyId}" v-for="oppty in oppties" :key="oppty.opptyId">{{oppty.opptyId}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      oppties: []
    }
  },
  mounted () {
    this.$data.oppties.push({ opptyId: 'H-1234567890' })
  },
  destroyed () {
    this.$data.oppties = []
  }
}
</script>
