<template>
  <div class="page-content">
    <b-card no-block>
      <b-tabs lazy card ref="tabs">
        <b-tab title="Groups" v-if="permission.groups">  
          <div class="text-right mb-2">
            <b-button @click="save('groups')">Save</b-button>      
          </div>
          <permission-group :groups="permission.groups"></permission-group>
        </b-tab>
        <b-tab title="Features" v-if="permission.features">
          <div class="text-right mb-2">
            <b-button @click="save('features')">Save</b-button>           
          </div>
          <permission-feature :features="permission.features" :groups="permission.groups"></permission-feature>
        </b-tab>
        <b-tab title="Document" v-if="permission.document">
          <document-assignment :odocument="permission.document" :groups="permission.groups" :saveDocument="save"></document-assignment>
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
      permission: {},
      opportunity: {}
    }
  },
  created () {
    this.$http.get('config/permission').then((response) => {
      const oppty = this.$store.state.options.opportunity
      var sections = response.body.data.document.sections
      for (const sid in oppty) {
        this.opportunity[oppty[sid].name] = {
          sid: sid,
          title: oppty[sid].title,
          fullTitle: oppty[sid].fullTitle,
          path: oppty[sid].path
        }
      }

      for (const name in sections) {
        if (!this.opportunity[name]) {
          delete response.body.data.document.sections[name]
        }
      }

      // this.$data.permission = response.body.data
      this.$set(this.$data, 'permission', response.body.data)
      const groups = response.body.data.groups
      for (const gp in groups) {
        this.$store.state.options.groups.push({ text: gp, value: gp })
      }
    })
  },
  destroyed () {
    this.$store.state.options.groups = []
  },
  methods: {
    save: function (part) {
      // the post json data is not the original data structure
      // so we need to serialize the permission data,
      // then let backend to deserialize the string
      this.$http.post('update/permission', { permission: JSON.stringify(this.permission) }, {
        emulateJSON: true
      }).then((response) => {
        this.permission[part] = response.body.data[part]
      })
    }
  },
  components: {
    PermissionGroup,
    PermissionFeature,
    DocumentAssignment
  }
}
</script>
