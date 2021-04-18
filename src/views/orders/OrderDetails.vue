<template>
<div>
  <CCard>
    <CCardHeader>
    Order Details
    </CCardHeader>
        <CCardBody>
          <div>
            <strong>Order number</strong>
            <p>{{order.number}}</p>
          </div>
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
          <div>
            <strong>Satus</strong>
            <CBadge :color="getBadge(order.status)" style="padding: 8px; margin-left: 10px">{{order.status}}</CBadge>
          </div>
          <div>
            <strong>Serviceman:</strong>
            <p>{{order.serviceman}}</p>
          </div>
        </CCardBody>
  </CCard>
</div>
</template>

<script>
export default {
  data(){
    return {
      order : {
        id: 23, 
        number: '234494', 
        type: 'A/C repairs',
        customer_name: 'Franco Martin', 
        customer_number: '0903234678', 
        date: '2012/03/24',
        serviceman: 'Jide',
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