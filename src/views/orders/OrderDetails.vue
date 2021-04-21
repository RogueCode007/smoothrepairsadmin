<template>
<div>
  <CRow>
    <CCol sm='12' md='6'>
      <CCard>
        <CCardHeader :color="getBadge(order.status)">
          <strong>Order Number : {{order.number}}</strong>
        </CCardHeader>  
        <CCardBody>
          <div>
            <strong>Order type</strong>
            <p>{{order.type}}</p>
          </div>
          <div>
            <strong>Customer Name</strong>
            <p>{{order.customer_name}}</p>
          </div>
          <div>
            <strong>Customer phone number</strong>
            <p>{{order.customer_number}}</p>
          </div>
          <div>
            <strong>Order date</strong>
            <p>{{order.date}}</p>
          </div>
          <div v-if="order.serviceman !== null">
            <strong>Serviceman:</strong>
            <p>{{order.serviceman}}</p>
          </div>
          <div v-else>
            <strong>Unassigned</strong>
            <CDropdown v-if="order.serviceman == null"
              style="display: block; margin-top: 10px"
              size="sm"
              toggler-text="Assign Serviceman"
              color="primary"
              class="mr-2 "
              v-model='newserviceman'>
              <CDropdownItem v-for="serviceman in servicemen" :key="serviceman.id" >{{serviceman}}</CDropdownItem>
            </CDropdown>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol sm='12' md='6'>
      <CCard>
        <CCardBody>
          <div>
            <strong>Satus</strong>
            <CBadge :color="getBadge(order.status)" style="padding: 8px; margin-left: 10px">{{order.status}}</CBadge>
          </div>
          
          <div class="mt-3">
            <CButton size="sm" color="success">Generate invoice</CButton>
            <CButton size="sm" color="danger" class="ml-3" @click="dangerModal = true">
              Delete
            </CButton>
          </div>
        </CCardBody>  
      </CCard>
    </CCol>
  </CRow>
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
</div>
</template>

<script>
const servicemen = ['Jide', 'Wale', 'Obiwan', 'Alfred']
export default {
  data(){
    return {
      dangerModal: false,
      newserviceman: '',
      servicemen: servicemen,
      order : {
        id: 23, 
        number: '234494', 
        type: 'A/C repairs',
        customer_name: 'Franco Martin', 
        customer_number: '0903234678', 
        date: '2012/03/24',
        serviceman: null,
        status: 'Pending'
      }
    }
  },
  methods: {
     getBadge(str){
      switch(str){
        case 'Delivered':
        return 'success'
        case 'Pending' :
         return 'warning'
      }
    }
  }


}
</script>

<style>

</style>