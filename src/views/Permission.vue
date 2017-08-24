<template>
  <div class="page-content">
    <b-card no-block>
      <b-tabs lazy card ref="tabs">
        <b-tab title="Groups" v-if="permission.groups">        
          <permission-group :groups="permission.groups"></permission-group>
        </b-tab>
        <b-tab title="Features" v-if="permission.features">
          <permission-feature :features="permission.features" :groups="permission.groups"></permission-feature>
        </b-tab>
        <b-tab title="Document" v-if="permission.document">
          <document-assignment :odocument="permission.document" :groups="permission.groups"></document-assignment>
        </b-tab>
      </b-tabs>
    </b-card> 
  </div>
</template>

<script>
import PermissionGroup from '@/components/permission-group'
import PermissionFeature from '@/components/permission-feature'
import DocumentAssignment from '@/components/document-assignment'

export default {
  name: 'permission',
  data () {
    return {
      permission: {}
    }
  },
  created () {
    this.$http.get('config/permission').then((response) => {
      this.$data.permission = response.body.data
      const groups = response.body.data.groups
      for (const gp in groups) {
        this.$store.state.options.groups.push({ text: gp, value: gp })
      }
    })
  },
  destroyed () {
    this.$store.state.options.groups = []
  },
  components: {
    PermissionGroup,
    PermissionFeature,
    DocumentAssignment
  }
}
</script>
