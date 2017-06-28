<template>
  <div id="cs-home">
    <div class="panel panel-default" style="position:relative;z-index:1">

    </div>
  </div>
</template>

<script>
export default {
  name: 'cs',
  data () {
    return {
      mini: true,
      pos: {}
    }
  },
  mounted () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cs-home {
  height: 100%;
  width: 100%;
  background:url('../assets/bg_sd.jpg') no-repeat center center;
  background-size: cover;
}
</style>
