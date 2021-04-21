<template>
  <div>
    <CRow>
      <CCol sm='12' md='6'>
        <CCard>
          <CCardHeader>
            About Customer
          </CCardHeader>
          <CCardBody>
            <div>
              <strong>Name</strong>
              <p>{{customer.name}}</p>
            </div>
            <div>
              <strong>Phone number</strong>
              <p>{{customer.phone_number}}</p>
            </div>
            <div>
              <strong>Address</strong>
              <p>{{customer.address}}</p>
            </div>
            <div>
              <strong>Email Address</strong>
              <p>{{customer.email}}</p>
            </div>
            <div>
              <strong>Date Joined</strong>
              <p>{{customer.date_joined}}</p>
            </div>
            
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm='12' md='6'>
        <CCard>
          <CCardHeader>Orders</CCardHeader>
          <CCardBody>
            <CListGroup accent>
              <CListGroupItem color="secondary" 
              v-for="order in customer.orders" 
              :key="order.id"
              :accent="getAccent(order.status)"
              >
              <div style="display:flex; justify-content: space-between">
                <div>
                  <strong>{{order.order_date}}</strong>
                  <CBadge :color="getBadge(order.status)" style="padding: 8px; display: block">{{order.status}}</CBadge>
                </div>
                <div>
                  <p v-if="order.customer_name == null">Unsassigned</p>
                  <p v-else>Assigned to: <CLink to='/servicemen/1'>{{order.customer_name}}</CLink></p>
                  <CLink to="/orders/2" style="display: block">View Order</CLink>
                </div>
              </div>
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  </div>
</template>

<script>
const servicemen = [
  'Jide', 'Taiwo', "Gbenga", 'George'
]

export default {
  data(){
    return{
      servicemen: servicemen,
      customer: {
        name: 'Obiwan',
        phone_number: '08036738733',
        address: 'Plot 256, Arike Ade Street, Downtown',
        email: 'obiwan@gmail.com',
        date_joined: '2019/12/25',
        orders: [
          {'id':1, 'order_date': '2020/1/3','order_number': 234, 'customer_name': 'Francis Odeku', 'customer_number': '08467723987', 'status': 'Delivered', 'amount_paid': 3000, 'service': 'A/C repairs'},
          {'id':2, 'order_date': '2020/12/15','order_number': 234, 'customer_name': null, 'customer_number': '08467723987', 'status': 'Pending', 'amount_paid': 3000, 'service': 'A/C repairs'},
          {'id':3, 'order_date': '2021/02/23', 'order_number': 234, 'customer_name': 'Orichimaru', 'customer_number': '08467723987', 'status': 'Pending', 'amount_paid': 3000, 'service': 'A/C repairs'},
          {'id':4, 'order_date': '2021/03/5', 'order_number': 234, 'customer_name': 'Kakashi', 'customer_number': '08467723987', 'status': 'Delivered', 'amount_paid': 3000, 'service': 'A/C repairs'}
        ]
      }
    }
  },
  methods:{
    getBadge(str){
      switch(str){
        case 'Delivered':
        return 'success'
        default: return 'warning'
      }
    },
    getAccent(str){
      switch(str){
        case 'Delivered':
        return 'success'
        default: return 'warning'
      }
    }
  }
}
</script>

<style>

</style>