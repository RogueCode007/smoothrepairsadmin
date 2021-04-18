<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-grid"/> All Servicemen
      </CCardHeader>
      <ServicemenTable />
    </CCard> 
  </div>
  
</template>

<script>
import ServicemenTable from "@/components/ServicemenTable"
export default {
  components:{
    ServicemenTable
  },
  data(){
    return {
      

    }
  }

}
</script>

<style>

</style>