<template>
  <div class="page-content">
    <div>
      <b-pagination align="center" size="md" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />
    </div>
    <b-table striped hover show-empty 
        :items="items" 
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"

    >
      <template slot="opptyId" scope="row">{{row.value}}</template>
      <template slot="opptyName" scope="row">{{row.value}}</template>
      <template slot="clientName" scope="row">{{row.value}}</template>
      <template slot="bidManager" scope="row">
        <div v-for="user in row.value" :key="user.name">
          {{user.title}}
        </div>
      </template>
      <template slot="solutionConsulantOrLPA" scope="row">
        <div v-for="user in row.value" :key="user.name">
          {{user.title}}
        </div>
      </template>
    </b-table>
    <div>
      <b-pagination align="center" size="md" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'all',
  data () {
    return {
      items: [],
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
      fields: {
        opptyId: { label: 'Opportunity ID', sortable: true, 'class': 'text-center text-nowrap' },
        opptyName: { label: 'Opportunity Name', sortable: true },
        clientName: { label: 'Client Name', sortable: true },
        bidManager: { label: 'Bid Manager', sortable: false },
        solutionConsulantOrLPA: { label: 'Solution Consultant', sortable: false }
      },
      pager: {
        filter: {
          'opptyId': '',
          'opptyName': '',
          'clientName': '',
          'bidManager': '',
          'solutionCosulantOrLPA': ''
        },
        sort: {
          'opptyId': '',
          'opptyName': '',
          'clientName': ''
        },
        pageindex: 1,
        pagesize: 2000
      }
    }
  },
  created () {
    this.$http.post('all/oppties', this.pager).then((response) => {
      this.items = response.body.pageData
      this.totalRows = this.items.length
    })
  },
  destroyed () {
    this.$data.items = []
  }
}
</script>
