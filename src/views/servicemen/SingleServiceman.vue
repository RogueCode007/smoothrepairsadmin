<template>
  <div>
    <CRow>
      <CCol sm='12' md='6'>
        <CCard>
          <CCardHeader>
            About Serviceman
          </CCardHeader>
          <CCardBody>
            <div>
              <strong>Name</strong>
              <p>{{serviceman.name}}</p>
            </div>
            <div>
              <strong>Phone number</strong>
              <p>{{serviceman.phone_number}}</p>
            </div>
            <div>
              <strong>Address</strong>
              <p>{{serviceman.address}}</p>
            </div>
            <div>
              <strong>Status</strong>
              <CBadge :color="getBadge(serviceman.status)" style="padding: 8px; margin-left: 10px">{{serviceman.status}}</CBadge>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm='12' md='6'>
        <CCard>
          <CCardHeader>Jobs</CCardHeader>
          <CCardBody>
            <CListGroup accent>
              <CListGroupItem color="secondary" 
              v-for="job in serviceman.jobs" 
              :key="job.id"
              :accent="getAccent(job.status)"
              >
              <p>{{job.order_date}}</p>
              {{job.service}} for {{job.customer_name}} <router-link to='/'>view job</router-link>
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  </div>
</template>

<script>

export default {
  data(){
    return{
      serviceman: {
        name: 'Jide Francis',
        phone_number: '08036738733',
        address: 'Plot 256, Arike Ade Street, Downtown',
        status: 'Active',
        jobs: [
          {'id':1, 'order_date': '2020/1/3','order_number': 234, 'customer_name': 'Francis Odeku', 'customer_number': '08467723987', 'status': 'Delivered', 'amount_paid': 3000, 'service': 'A/C repairs'},
          {'id':2, 'order_date': '2020/12/15','order_number': 234, 'customer_name': 'Nakamato', 'customer_number': '08467723987', 'status': 'Pending', 'amount_paid': 3000, 'service': 'A/C repairs'},
          {'id':3, 'order_date': '2021/02/23', 'order_number': 234, 'customer_name': 'Orichimaru', 'customer_number': '08467723987', 'status': 'Pending', 'amount_paid': 3000, 'service': 'A/C repairs'},
          {'id':4, 'order_date': '2021/03/5', 'order_number': 234, 'customer_name': 'Kakashi', 'customer_number': '08467723987', 'status': 'Delivered', 'amount_paid': 3000, 'service': 'A/C repairs'}
        ]
      }
    }
  },
  methods:{
    getBadge(str){
      switch(str){
        case 'Active':
        return 'primary'
        case 'Inactive' :
         return 'secondary'
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