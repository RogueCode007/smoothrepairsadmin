<template>
  <CCardBody>
    <CDataTable
      :items="servicemenData.serviceMan"
      :fields="fields"
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
      table-filter
      cleaner
    >
    <template #name="{item}">
      <td>
        <CLink :to="{ name: 'serviceman', params: { id: item._id }}">{{item.name}}</CLink>
      </td>
    </template>
    <template #jobs="{item}">
      <td>
        {{item.jobs.length}}
      </td>
    </template>
      <template #active_status="{item}">
        <td v-if="item.active_status">
          <CBadge color="success" style="padding: 8px">
            Active
          </CBadge>
        </td>
        <td v-else>
          <CBadge color="secondary" style="padding: 8px">
            Inactive
          </CBadge>
        </td>
      </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
import axios from 'axios'
import url from '@/main'
const fields = [
  { key: 'name', _style:'min-width:30%' },
  { key: 'phone',label:'Phone Number', _style:'min-width:20%;' },
  { key: 'address', _style:'min-width:20%;' },
  { key: 'jobs', label: 'No of Jobs done'},
  { key: 'active_status', _style:'min-width:10%;', label: 'Status' },
  
]

export default {
  data () {
    return {
      fields,
      details: [],
      collapseDuration: 0,
      servicemenData: {},
      loading: true
    }
  },
  methods: {
    getBadge(status) {
      if(status){
        return 'success'
      }else{
        return 'secondary'
      }
    },
    toggleDetails (item) {
      this.$set(this.servicemen[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  },
  beforeCreate(){
    this.$store.state.loading = true
    axios({url: `${url}/servicemen`, method: 'GET'})
    .then(res=>{
      this.servicemenData = res.data
      this.$store.state.loading = false
      console.log(this.servicemenData)
    })
  }
}
</script>