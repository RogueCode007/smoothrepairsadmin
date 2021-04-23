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
              <p>{{servicemanData.serviceMen[0].name}}</p>
            </div>
            <div>
              <strong>Phone number</strong>
              <p>{{servicemanData.serviceMen[0].phone}}</p>
            </div>
            <div>
              <strong>Address</strong>
              <p>{{servicemanData.serviceMen[0].phone}}</p>
            </div>
            <div>
              <strong>Status</strong>
               <CBadge color="success" style="padding: 8px" class="ml-2" v-if="servicemanData.serviceMen[0].active_status">
                  Active
               </CBadge>
               <CBadge color="secondary" style="padding: 8px" class="ml-2" v-else>
                 Inactive
               </CBadge>
            </div>
            <CDropdown 
              style="display: block; margin-top: 20px"
              size="sm"
              toggler-text="Change Status"
              color="primary"
            >
            <CDropdownItem @click="changeServicemanStatus(true)">Active</CDropdownItem>
            <CDropdownItem @click="changeServicemanStatus(false)">Inactive</CDropdownItem>
          </CDropdown>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm='12' md='6'>
        <CCard>
          <CCardHeader>Jobs</CCardHeader>
          <!-- <CCardBody>
            <CListGroup accent
              serviceman.jobs-per-page='2'
              pagination
            >
              <CListGroupItem color="secondary" 
              v-for="job in serviceman.jobs" 
              :key="job.id"
              :accent="getAccent(job.status)"
              >
              <p>{{job.order_date}}</p>
              {{job.service}} for {{job.customer_name}} <router-link to='/orders/1'>view job</router-link>
              </CListGroupItem>
            </CListGroup>
          </CCardBody> -->
        </CCard>
      </CCol>

    </CRow>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/main'
export default {
  data(){
    return{
      servicemanData: {},
      
    }
  },
  methods:{
    getBadge(str){
      switch(str){
        case true:
        return 'primary'
        case false :
         return 'secondary'
      }
    },
    getAccent(str){
      switch(str){
        case 'Delivered':
        return 'success'
        default: return 'warning'
      }
    },
    changeServicemanStatus(param){
      let data = 
        {
          name: this.servicemanData.serviceMen[0].name,
          phone: this.servicemanData.serviceMen[0].phone,
          status: param
        }
      axios.put(`${url}/servicemen/${this.$route.params.id}`, data, {
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res=>{
        location.reload();
      })
      .catch(err=>{
        console.log(err)
      })
    }

  },
  beforeCreate(){
    this.$store.state.loading = false
    axios({url: `${url}/servicemen/${this.$route.params.id}`, method: 'GET'})
    .then(res=>{
      this.servicemanData = res.data
      console.log(this.servicemanData)
    })
  },
}
</script>

<style>

</style>