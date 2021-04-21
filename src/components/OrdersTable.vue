<template>
  <CCardBody> 
    <CDataTable
      :items="ordersData.orders"
      :fields="fields"
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
      table-filter
      cleaner
    >
      <template #date_created="{item}">
        <td>{{item.date_created | formateDate}}</td>
      </template>
      <template #customername="{item}">
        <td v-if="item.customer">
          <router-link :to="{ name: 'customer', params: { id: item.customer._id }}">{{item.customer.fullname}}</router-link> 
        </td>
        <td v-else>No customer</td>
      </template>
      <template #customernumber="{item}">
        <td v-if="item.customer">{{item.customer.phone}}</td>
        <td v-else>None</td>
      </template>
      <template #customeremail="{item}">
        <td v-if="item.customer">{{item.customer.email}}</td>
        <td v-else>None</td>
      </template>
      <template #amount="{item}">
        <td v-if="item.service">{{item.service.price}}</td>
        <td v-else>None</td>
      </template>
      <template #status="{item}">
        <td>
          <CBadge :color="getBadge(item.status)" style="padding: 8px">
            {{item.status}}
          </CBadge>
        </td>
      </template>
      <template #view="{item}">
        <td class="py-2">
          <CButton size="sm" color="info" class="ml-3" @click="showOrderModal(item)">
            View
          </CButton>
        </td>
      </template>
    </CDataTable>
    <!-- <CModal
      title="Are you sure?"
      color="danger"
      :show.sync="dangerModal"
    >
      <h4> Do you want to delete this order?</h4>
      <template #footer>
        <CButton @click="dangerModal = false" color="secondary">Cancel</CButton>
        <CButton @click="dangerModal = false" color="danger">Delete</CButton>
      </template>
    </CModal> -->
    <CModal
      :color="getBadge(order.status)"
      title="Order details"
      size="lg"
      :show.sync="orderModal"
    > 
    <CRow>
      <CCol>
        <div>
          <strong>Order type</strong>
          <p>{{order.description}}</p>
        </div>
        <div>
          <strong>Customer Name</strong>
          <p v-if="order.customer">{{order.customer.fullname}}</p>
          <p v-else>No customer</p>
        </div>
        <div>
          <strong>Customer phone number</strong>
          <p v-if="order.customer">{{order.customer.phone}}</p>
          <p v-else>None</p>
        </div>
      </CCol>
      <CCol>
        <div>
          <strong>Order date</strong>
          <p>{{order.date_created | formateDate}}</p>
        </div>
        <div>
          <strong>Total amount</strong>
          <p v-if='order.service'>#{{order.service.price}}</p>
        </div>
        <div v-if="order.serviceman != null">
          <strong>Serviceman:</strong>
          <p>{{order.serviceman.name}}</p>
        </div>
        <div v-else>
          <strong>Unassigned</strong>
          <CDropdown 
            style="display: block; margin-top: 10px"
            size="sm"
            toggler-text="Assign Serviceman"
            color="primary"
            v-model="serviceman"
          >
            <CDropdownItem v-for="serviceman in servicemenData.serviceman" :key="serviceman.id" @click="assignServiceman(serviceman)">{{serviceman.name}}</CDropdownItem>
          </CDropdown> 
        </div>
      </CCol>
    </CRow>
      <template #footer>
        <CButton @click="orderModal = false" color="secondary">Cancel</CButton>
      </template>
    </CModal>
  </CCardBody> 
</template>

<script>
import axios from 'axios'
import url from '@/main'
const fields = [
  { key: 'description', _style:'min-width:30%' },
  {key: 'date_created', label: 'Order date'},
  { key: 'customername', _style:'min-width:15%;', label: 'Customer Name' },
  { key: 'customernumber', _style:'min-width:15%;', label: 'Customer Number' },
  { key: 'customeremail', _style:'min-width:15%;' , label: 'Customer Email'},
  { 
    key: 'amount', 
    _style: 'min-width:1%'
  },
  { key: 'status', _style:'min-width:10%;' },
  {key: 'view', label: ''}
  
]

export default {
  data () {
    return {  
      fields,
      details: [],
      servicemenData: {},
      ordersData:{},
      collapseDuration: 0,
      dangerModal: false,
      orderModal: false,
      servicemen: ['Jide', 'Wale', 'Obiwan', 'Alfred'],
      order : {},
      serviceman: ''
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
        case 'success': return 'success'
        case 'complete': return 'info'
        case 'pending': return 'warning'
        case 'error': return 'danger'
        case 'picked': return 'secondary'
      }
    },
    showOrderModal(item){
      this.orderModal = true
      this.order = item;
    },
    assignServiceman(serviceman){
      console.log(serviceman)
      console.log(this.order)
    },
    toggleDetails (item) {
      this.$set(this.ordersData[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  },
  beforeCreate(){
    this.$store.state.loading = true
    axios({url: `${url}/order`, method: 'GET'})
    .then(res=>{
      this.ordersData = res.data  
      console.log(this.ordersData)
    })
  },
  created(){
    axios({url: `${url}/servicemen`, method: 'GET'})
    .then(res=>{
      this.servicemenData = res.data 
      this.$store.state.loading = false
      
    })
  }
}
</script>
<style scoped>

</style>