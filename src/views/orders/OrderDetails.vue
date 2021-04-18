<template>
<div>
  <CCard>
    <CCardHeader>
        <CIcon name="cil-grid"/> Order no: {{id}}
        <CCardBody>
          <div>
            <p>Customer Name: </p>
            <p>Phone-number</p>
          </div>
        </CCardBody>
    </CCardHeader>
  </CCard>
</div>
</template>

<script>
export default {
  data(){
    return {
      id
    }
  },
  created(){
    this.id = this.$route.params.id
  }

}
</script>

<style>

</style>