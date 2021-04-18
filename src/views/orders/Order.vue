<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-grid"/> All Orders
      </CCardHeader>
      <OrdersTable/>
      </CCard>     
  </div>
</template>

<script>
import OrdersTable from '@/components/OrdersTable'
export default {
  components:{
    OrdersTable
  }
}
</script>

<style>

</style>