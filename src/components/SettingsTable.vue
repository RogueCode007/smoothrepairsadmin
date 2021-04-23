<template>
  <div>
    <CDataTable
      :items="admins"
      :fields="fields"
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
      table-filter
      cleaner
    >
      <!-- Pass the item in the action prop below -->
      <template #action="">
        <td>
          <CButton color="danger" size="sm" @click="dangerModal = true">
            Delete
          </CButton>
        </td>
        <CModal
          title="Are you sure?"
          color="danger"
          :show.sync="dangerModal"
        >
          <h4> Do you want to remove this admin?</h4>
          <template #footer>
            <CButton @click="dangerModal = false" color="secondary">Cancel</CButton>
            <CButton @click="dangerModal = false" color="danger">Delete</CButton>
          </template>
      </CModal>
      </template>
    </CDataTable>
  </div>
</template>

<script>
import axios from 'axios'
import  url from '@/main'
const admins = [
    {name: 'Obiwan', email: 'obiwan@smoothrepairs.ng', service: 'generator'},
    {name: 'Obiwan', email: 'obiwan@smoothrepairs.ng', service: 'generator'},
    {name: 'Obiwan', email: 'obiwan@smoothrepairs.ng', service: 'air conditioner'},
    {name: 'Obiwan', email: 'obiwan@smoothrepairs.ng', service: 'generator'},
    {name: 'Obiwan', email: 'obiwan@smoothrepairs.ng', service: 'air conditioner'},
    {name: 'Obiwan', email: 'obiwan@smoothrepairs.ng', service: 'air conditioner'},
    {name: 'Obiwan', email: 'obiwan@smoothrepairs.ng', service: 'air conditioner'},
  ]
const fields = [
  { key: 'name', label: 'Admin Name'  },
  { key: 'email', label: 'Email', },
  { key: 'service', label: 'Service type', _style:'min-width:20%;' },
  
  
]

export default {
  data(){
    return {
      admins: admins.map((item, id) => { return {...item, id}}),
      fields,
      details: [],
      collapseDuration: 0,
      dangerModal: false
    }
  },
  beforeCreate(){
    this.$store.state.loading = true;
    axios.get(`${url}/users/allUsers`)
    .then(res=>{
      console.log(res.data)
      this.$store.state.loading = false
    })
  }

}
</script>

<style>

</style>



