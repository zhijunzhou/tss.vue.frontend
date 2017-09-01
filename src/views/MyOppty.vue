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
      <template slot="dealStatus" scope="row">{{row.value}}</template>
      <template slot="salesStage" scope="row">{{row.value}}</template>
      <template slot="solnStatus" scope="data">
        {{data.item.statusColor}} {{data.item.statusRating}}
      </template>   
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'my',
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
        dealStatus: { label: 'Deal Status', sortable: false },
        salesStage: { label: 'Sales Stage', sortable: false },
        solnStatus: { label: 'Solution Status Report', sortable: false }
      },
      pager: {
        filter: {
          'opptyId': '',
          'opptyName': '',
          'clientName': '',
          'dealStatus': '',
          'salesStage': ''
        },
        sort: {
          'opptyId': '',
          'opptyName': 'asc',
          'clientName': ''
        },
        pageindex: 1,
        pagesize: 2000
      }
    }
  },
  created () {
    this.$http.post('my/oppties', this.pager).then((response) => {
      this.items = response.body.pageData
      this.totalRows = this.items.length
    })
  },
  destroyed () {
    this.$data.items = []
  }
}
</script>
