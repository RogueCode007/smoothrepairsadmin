<template>
  <div>
    
   <CCard>
      <CCardHeader>
        <div style="display: flex; justify-content: space-between">
          <div>
            <CIcon name="cil-grid"/> Admin List
          </div>
          <div>
            <CButton color="info" size="sm" @click="adminModal = true" class="mr-3">
              <CIcon name="cil-plus"/> Add Admin 
            </CButton>
            <CButton color="info" size="sm" @click="servicemanModal = true"><CIcon name="cil-plus"/> Add serviceman</CButton>
          </div>
        </div>
        <CModal
          title="Add Serviceman"
          color='info'
          :show.sync="servicemanModal"
        >
          <CForm >
            <CCardBody>
              <p class="text-danger" v-if='form.error'>{{form.errorMessage}}</p>
              <CRow>
                <CCol>
                  <div>
                  <strong>Name</strong>
                  <CInput  
                    horizontal
                    v-model="form.serviceman.name"
                  />
                  </div>
                </CCol>
                <CCol>
                  <div>
                  <strong>Phone number</strong>
                  <CInput  
                    horizontal
                    v-model="form.serviceman.phone"
                  />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <div>
                    <strong>Address</strong>
                    <CTextarea
                      placeholder="Address..."
                      horizontal
                      rows="3"
                      v-model="form.serviceman.address"
                    />
                  </div>
                </CCol>
                <CCol>
                  <div>
                  <strong>Passcode</strong>
                  <CInput  
                    horizontal
                    v-model="form.serviceman.passcode"
                  />
                  </div>
                </CCol>
              </CRow>
             
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="success" class="mr-3" @click="validateServicemanForm()"><CIcon name="cil-check-circle"/> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
            </CCardFooter>
          </CForm>
          <template #footer>
            <div></div>
          </template>
        </CModal>
        <CModal
          title="Add Admin"
          color='info'
          :show.sync="adminModal"
        >
          <CForm>
            <CCardBody>
              <p class="text-danger" v-if='form.error'>{{form.errorMessage}}</p>
              <CInput
                label="Admin Email"
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
                v-model="form.admin.email"
              />
              <CInput
                label="Admin Password"
                placeholder="Set Password"
                type="password"
                horizontal
                autocomplete="email"
                v-model="form.admin.password"
              />
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="success" class="mr-3" @click="validateAdminForm()"><CIcon name="cil-check-circle"/> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
            </CCardFooter>
          </CForm>
          <template #footer>
            <div></div>
          </template>
        </CModal>
        
      </CCardHeader>
      <CCardBody>
        <CAlert
          v-if="adminSignupMessage"
          color="success"
        >
          Admin added successfully
        </CAlert>
        <CAlert
          v-if="servicemanSignupMessage"
          color="success"
          closeButton
        >
          Serviceman added successfully
        </CAlert>
        <SettingsTable />
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import SettingsTable from '@/components/SettingsTable'
import {cilPlus} from '@coreui/icons'
import axios from 'axios'
import url from '@/main'

const options = [
  'Air conditioning', 'Gen Repairs'
]
export default {
  components:{
    SettingsTable
  },
  icons: {cilPlus},
  data(){
    return {
      options: options,
      adminModal: false,
      servicemanModal: false,
      adminSignupMessage: false,
      servicemanSignupMessage: false,
      form: {
        serviceman :{
          name: '',
          passcode: '',
          address: '',
          phone: '',
        },
        admin: {
          email : '',
          password: '',
        },
        error: false,
        errorMessage: ''
      }
    }
  },
  methods:{
    validateAdminForm(){
      if(this.form.admin.password.length < 4){
        this.form.error = true;
        this.form.errorMessage = "Password has to be a minimun of 4 characters"
      }else{
        this.submitAdminForm()
      }
    },
    validateServicemanForm(){
      if(this.form.serviceman.name.length < 1){
        this.form.error = true;
        this.form.errorMessage = "Please enter a name"
        return
      }else if(!Number.isInteger(parseInt(this.form.serviceman.phone)) || this.form.serviceman.phone.length != 11){
        this.form.error = true;
        this.form.errorMessage = "Please enter a valid phone number"
        console.log(this.form.serviceman.phone.length)
        return
      }else if(!Number.isInteger(parseInt(this.form.serviceman.passcode)) || this.form.serviceman.passcode.length != 4){
        this.form.error = true;
        this.form.errorMessage = "Please enter a 4 nuumber passcode"
        return
      }
      else{
        this.submitServicemanForm()
      }
    },
    submitAdminForm(){
      axios.post(`${url}/admin/signup`, this.form.admin, {
         headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(()=>{
        this.adminModal = false
        this.adminSignupMessage = true
        location.reload()
      })
      .catch(err=>{
        console.log(err)
      })
    },
    submitServicemanForm(){
      axios.post(`${url}/servicemen/add`, this.form.serviceman, {
         headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(()=>{
        this.servicemanModal = false
        this.servicemanSignupMessage = true
        
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>