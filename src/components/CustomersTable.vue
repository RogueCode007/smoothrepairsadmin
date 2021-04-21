<template>
  <CCardBody>
    <CDataTable
      :items="customersData.users"
      :fields="fields"
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
      table-filter
      cleaner
    >
    <template #fullname="{item}">
      <td>
        <router-link :to="{ name: 'customer', params: { id: item._id }}">{{item.fullname}}</router-link>
      </td>
    </template>
    <template #date_created="{item}">
      <td>
        {{item.date_created | formateDate}}
      </td>
    </template>
    <template #is_verified="{item}">
      <td v-if="item.is_verified">
        <CBadge :color="getBadge(item.is_verified)" style="padding: 8px">
          Verified
        </CBadge>
      </td>
      <td v-else>
        <CBadge :color="getBadge(item.is_verified)" style="padding: 8px">
          Unverified
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
  { key: 'fullname', _style:'min-width:30%' },
  { key: 'phone', label: 'Phone number', _style:'min-width:20%;' },
  { key: 'address', _style:'min-width:20%;' },
  'email',
  // 'no_of_orders',
  
  { key: 'date_created', _style:'min-width:10%;', label: 'Date joined' },
  {key:'is_verified', label: 'Status'}
  
]

export default {
  data () {
    return {
      fields,
      details: [],
      collapseDuration: 0,
      customersData: {}
    }
  },
  filters:{
    formateDate(str){
      var date = new Date(str);
      var day = date.getDate();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var dateStr = year+"/"+month+"/"+day;
      return dateStr
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case true: return 'success'
        case false: return 'secondary'
      }
    }
  },
  beforeCreate(){
    this.$store.state.loading = true;
    axios.get(`${url}/users/allUsers`)
    .then(res=>{
      this.customersData = res.data
      this.$store.state.loading = false
    })
  }
}
</script>