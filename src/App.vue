<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from '@/components/top-menu'

export default {
  name: 'app',

  components: {
    TopMenu
  }
}
</script>
<style>
html, body, #app {
  height: 100% !important;
  margin: 0;
  padding: 0;
}
.page-content {
  margin-top: 56px;
}
.card {
  width: 100%;
}
</style>
