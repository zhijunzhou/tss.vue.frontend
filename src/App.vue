<template>
  <div id="app">
    <top-menu></top-menu>
    <loading-dialog></loading-dialog>
    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from '@/components/top-menu'
import LoadingDialog from '@/components/loading-dialog'

export default {
  name: 'app',
  components: {
    TopMenu,
    LoadingDialog
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
