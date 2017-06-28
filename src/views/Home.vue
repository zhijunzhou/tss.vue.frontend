<template>
  <div id="ss-home">
    <div id="ss-portal-container">
      <div class="ss-outlink" v-for="link in links" :key="link.title">
        <div class="ss-outlink-item">
          <b-dropdown :text="link.title" variant="success">
            <b-dropdown-item v-for="item in link.items" :link="true" :to="item.link" :key="item.title">{{item.title}}</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      links: this.$store.state.homelinks,
      recent: []
    }
  },
  created () {
    console.log(this.$http.options.root)
    this.$http.get('doc/schema').then((response) => {
      console.log(response)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#ss-home {
  height: 100%;
  width: 100%;
  background:url('../assets/bg_sd.jpg') no-repeat center center;
  background-size: cover;
}
#ss-portal-container {
  border: none;
  height: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.ss-outlink {
  height: 160px;
  width: 160px;
  box-sizing: border-box;
  padding: 2px;
}
.ss-outlink-item, .ss-outlink-item>li {
  height: 100%;
  width: 100%;
}
.dropdown-toggle::after {
  border: none;
}
.dropdown {
  width: 100%;
  height: 100%;
}
.btn-group > .btn:first-child {
  width: 100%;
  height: 100%;
  white-space: normal;
  font-weight: bolder;
}
.ss-outlink-item .nav-link {
  height: 156px !important;
  width: 156px;
  width: 100%;
}
</style>
