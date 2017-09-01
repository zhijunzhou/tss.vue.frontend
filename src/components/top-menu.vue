<template>
  <div id="top-menu">
    <b-navbar toggleable type="inverse" variant="dark" fixed="top">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="/">
        <span class="ss-white">{{company}}</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">    
        <b-nav is-nav-bar v-for="m in menus" :key="m.title">
          <b-nav-item-dropdown :text="m.title" :no-caret="true">
            <b-dropdown-item v-for="item in m.items" :to="item.link" :key="item.title">{{item.title}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  data () {
    return {
      links: this.$store.state.homelinks,
      menus: this.$store.state.menus
    }
  },
  computed: {
    company () {
      return this.$store.state.title
    }
  }
}
</script>

<style>
.b-nav-dropdown>a {
  color: #fff;
}
a:hover {
  color: #999;
}
</style>
