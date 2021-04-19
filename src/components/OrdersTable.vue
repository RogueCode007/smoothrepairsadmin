<template>
  <CCardBody>
    <CDataTable
      :items="ordersData"
      :fields="fields"
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
      table-filter
      cleaner
    >
      <template #status="{item}">
        <td>
          <CBadge :color="getBadge(item.status)" style="padding: 8px">
            {{item.status}}
          </CBadge>
        </td>
      </template>
      <template #view="{item}">
        <td class="py-2">
          <CButton size="sm" color="primary" class="ml-3" @click="showOrderModal(item)">
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
          <p>{{order.service}}</p>
        </div>
        <div>
          <strong>Customer Name</strong>
          <p>{{order.customer_name}}</p>
        </div>
        <div>
          <strong>Customer phone number</strong>
          <p>{{order.customer_number}}</p>
        </div>
      </CCol>
      <CCol>
        <div>
          <strong>Order date</strong>
          <p>{{order.order_date}}</p>
        </div>
        <div>
          <strong>Total amount</strong>
          <p>#{{order.amount}}</p>
        </div>
        <div v-if="order.serviceman != null">
          <strong>Serviceman:</strong>
          <p>{{order.serviceman}}</p>
        </div>
        <div v-else>
          <strong>Unassigned</strong>
          <CDropdown 
            style="display: block; margin-top: 10px"
            size="sm"
            toggler-text="Assign Serviceman"
            color="primary"
            v-model="serviceman"
            @change="assignServiceman($event)"
          >
            <CDropdownItem v-for="serviceman in servicemen" :key="serviceman.id">{{serviceman}}</CDropdownItem>
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
import ordersData from '@/views/users/OrderData'

const fields = [
  { key: 'service', _style:'min-width:30%' },
  'order_date',
  { key: 'customer_name', _style:'min-width:15%;' },
  { key: 'customer_number', _style:'min-width:15%;' },
  { key: 'customer_address', _style:'min-width:15%;' },
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
      ordersData: ordersData.map((item, id) => { return {...item, id}}),
      fields,
      details: [],
      collapseDuration: 0,
      dangerModal: false,
      orderModal: false,
      servicemen: ['Jide', 'Wale', 'Obiwan', 'Alfred'],
      order : {},
      serviceman: ''
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Delivered': return 'success'
        case 'Pending': return 'warning'
        default: 'primary'
      }
    },
    showOrderModal(item){
      this.orderModal = true
      this.order = item;
    },
    assignServiceman(event){
      console.log(event.target.value)
       console.log(this.serviceman);
       console.log(this.order)
    },
    toggleDetails (item) {
      this.$set(this.ordersData[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  }
}
</script>