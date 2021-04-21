<template>
  <div>
    <WidgetsDropdown :numbers="numbers" />
    <CCard>
      <CCardHeader>
        <CIcon name="cil-grid"/>Most recent Orders
      </CCardHeader>
      <CCardBody>
        <RecentOrders v-on:totalOrders="getTotalOrders"/>
      </CCardBody>
    </CCard>
   
  </div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'
import RecentOrders from '@/components/RecentOrders'
import axios from 'axios'
import url from '@/main'
export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand,
    RecentOrders
  },
  data () {
    return {
      selected: 'Month',
      numbers:{
        total: '',
        new: '50',
        servicemen: ''
      },
      
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    },
    getTotalOrders(val){
      this.numbers.total = val.toString()
    }
  },
  beforeCreate(){
    this.$store.state.loading = true
     axios({url: `${url}/order`, method: 'GET'})
    .then(res=>{
      this.numbers.total = res.data.orders.length.toString()
    })
    axios({url: `${url}/servicemen`, method: 'GET'})
    .then(res=>{
      this.numbers.servicemen = res.data.serviceMan.length.toString()
      this.$store.state.loading = false
    })
  }

}
</script>
