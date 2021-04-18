<template>
  <CCardBody>
    <CDataTable
      :items="servicemen"
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
        <CLink :to="{ name: 'serviceman', params: { id: item.id }}">{{item.name}}</CLink>
      </td>
    </template>
      <template #status="{item}">
        <td>
          <CBadge :color="getBadge(item.status)" style="padding: 8px">
            {{item.status}}
          </CBadge>
        </td>
      </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
const servicemen = [
  {id: 1, name: 'Jido', number: '08097545678', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', status: 'Active', jobs: 9,  },
  {id: 2,name: 'Jide', number: '08097545678', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', status: 'Active', jobs: 7,  },
  {id: 3, name: 'Jide', number: '08097545678', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', status: 'Inactive', jobs: 6,  },
  {id: 4, name: 'Jide', number: '08097545678', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', status: 'Active', jobs: 3,  },
  {id: 5, name: 'Jide', number: '08097545678', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', status: 'Inactive', jobs: 0,  },
  {id: 6, name: 'Jide', number: '08097545678', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', status: 'Active', jobs:9  },
  {id: 7, name: 'Jide', number: '08097545678', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', status: 'Active', jobs: 6,  },
  {id: 8, name: 'Jide', number: '08097545678', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', status: 'Active', jobs: 1,  },
  {id: 9, name: 'Jide', number: '08097545678', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', status: 'Active', jobs: 1,  }
  
]

const fields = [
  { key: 'name', _style:'min-width:30%' },
  { key: 'number',label:'Phone Number', _style:'min-width:20%;' },
  { key: 'address', _style:'min-width:20%;' },
  { key: 'jobs', label: 'No of Jobs done'},
  { key: 'status', _style:'min-width:10%;' },
  // { 
  //   key: 'show_details', 
  //   label: '', 
  //   _style: 'min-width:1%'
  // },
  
]

export default {
  data () {
    return {
      servicemen: servicemen.map((item, index) => { return {...item, index}}),
      fields,
      details: [],
      collapseDuration: 0,
    
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        default: 'primary'
      }
    },
    toggleDetails (item) {
      this.$set(this.servicemen[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  }
}
</script>