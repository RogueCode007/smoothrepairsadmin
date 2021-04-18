<template>
  <div>
    
   <CCard>
      <CCardHeader>
        <div style="display: flex; justify-content: space-between">
          <div>
            <CIcon name="cil-grid"/> Admin List
          </div>
          <div>
            <CButton color="primary" size="sm" @click="adminModal = true" class="mr-3">
              <CIcon name="cil-plus"/> Add Admin 
            </CButton>
            <CButton color="primary" size="sm" @click="servicemanModal = true"><CIcon name="cil-plus"/> Add serviceman</CButton>
          </div>
        </div>
        <CModal
          title="Add Serviceman"
          color='primary'
          :show.sync="servicemanModal"
        >
          <CForm >
            <CCardBody>
              <CInput
                description="Let us know your full name."
                label="Name"
                horizontal
              />
              <CTextarea
                label="Address"
                placeholder="Address..."
                horizontal
                rows="6"
              />
              <CInput
                description="Let us know your phone number"
                label="Phone number"
                horizontal
              />
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary" class="mr-3"><CIcon name="cil-check-circle"/> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
            </CCardFooter>
          </CForm>
          <template #footer>
            <div></div>
          </template>
        </CModal>
        <CModal
          title="Add Admin"
          color='primary'
          :show.sync="adminModal"
        >
          <CForm>
            <CCardBody>
              <CInput
                label="Admin Email"
                description="Please enter your email"
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
              />
              <CSelect
                label="Choose Service"
                horizontal
                :options="options"
                placeholder="Please select"
              />
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary" class="mr-3"><CIcon name="cil-check-circle"/> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
            </CCardFooter>
          </CForm>
          <template #footer>
            <div></div>
          </template>
        </CModal>
      </CCardHeader>
      <CCardBody>
        <SettingsTable />
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import SettingsTable from '@/components/SettingsTable'
import {cilPlus} from '@coreui/icons'
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
      servicemanModal: false
    }
  }
}
</script>

<style>

</style>