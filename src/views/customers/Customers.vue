<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-grid"/> All Customers
      </CCardHeader>
      <CustomersTable />
    </CCard> 
  </div>
</template>

<script>
import CustomersTable from "@/components/CustomersTable"
export default {
  components:{
    CustomersTable
  }
}
</script>

<style>

</style>