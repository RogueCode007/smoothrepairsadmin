<template>
  <CCardBody class="body-text">
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
       <template #view>
        <td class="py-2">
          <CLink to='/orders/2'>View</CLink>
        </td>
      </template>
      <!-- <template #show_details="{item, index}">
        <td class="py-2">
          <CButton
            color="primary"
            variant="outline"
            square
            size="sm"
            @click="toggleDetails(item, index)"
          >
            {{Boolean(item._toggled) ? 'Less' : 'More'}}
          </CButton>
        </td>
      </template>
      <template #details="{item}">
        <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
          <CCardBody>
              <h4 style="margin-bottom:20px">
                Order Details
              </h4>
              <div style="display:flex; justify-content:space-between">
                <div>
                  <p>Order Number: {{item.order_number}}</p>
                  <p>Customer: {{item.customer_name}}</p>
                  <p>Phone-number: {{item.customer_number}}</p>
                  <p class="text-muted">Ordered on: {{item.order_date}}</p>
                  
                  <CDropdown v-if="item.serviceman == null"
                    style="display: block; margin-bottom: 10px"
                    size="sm"
                    toggler-text="Assign Serviceman"
                    color="primary"
                    class="mr-2 ">
                    <CDropdownItem v-for="serviceman in servicemen" :key="serviceman.id">{{serviceman}}</CDropdownItem>
                  </CDropdown>
                  <p v-else>Assigned to: <CLink to='/servicemen/2'>{{item.serviceman}}</CLink></p>
                </div>
                <div>
                  <CButton size="sm" color="success">Generate invoice</CButton>
                  <CButton size="sm" color="danger" class="ml-3" @click="dangerModal = true">
                    Delete
                  </CButton>
                </div>
              </div>
          </CCardBody>
        </CCollapse>
      </template> -->
    </CDataTable>
    <CModal
      title="Are you sure?"
      color="danger"
      :show.sync="dangerModal"
    >
      <h4> Do you want to delete this order?</h4>
      <template #footer>
        <CButton @click="dangerModal = false" color="secondary">Cancel</CButton>
        <CButton @click="dangerModal = false" color="danger">Delete</CButton>
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
      dangerModal: false
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
    toggleDetails (item) {
      this.$set(this.ordersData[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  }
}
</script>
<style scoped>

</style>