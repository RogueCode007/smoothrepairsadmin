<template>
  <CHeader with-subheader class="justify-content-between">
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <!-- <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <img :src="Logo" height="48" alt="Logo"/>
    </CHeaderBrand> -->
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/orders" exact>
          Orders
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to='/servicemen'>
          Servicemen
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <div class="">
      <CHeaderNav>
        <CHeaderNavItem class="px-3 c-d-legacy-none">
          <button
            @click="() => $store.commit('toggle', 'darkMode')"
            class="c-header-nav-btn"
          >
            <CIcon v-if="$store.state.darkMode" name="cil-sun"/>
            <CIcon v-else name="cil-moon"/>
          </button>
        </CHeaderNavItem>
        <CHeaderNavItem>
          <CButton :disabled="disabled" color="danger" size="sm" class="mr-3" @click='logout'>
            <CIcon name="cil-account-logout" style="color: white; margin-right: 3px" /> 
            Logout 
          </CButton>
        </CHeaderNavItem>
      </CHeaderNav>
    </div>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import TheHeaderDropdownNotif from './TheHeaderDropdownNotif'
import TheHeaderDropdownTasks from './TheHeaderDropdownTasks'
import TheHeaderDropdownMssgs from './TheHeaderDropdownMssgs'
import {cilAccountLogout} from '@coreui/icons'
import Logo from '@/assets/srlogo.png'

export default {
  name: 'TheHeader',
  icons: {cilAccountLogout},
  components: {
    TheHeaderDropdownAccnt,
    TheHeaderDropdownNotif,
    TheHeaderDropdownTasks,
    TheHeaderDropdownMssgs
  },
  data(){
    return {
      Logo: Logo,
      disabled: false
    }
  },
  methods:{
    logout(){
      this.disabled = true
      this.$store.dispatch('authLogout')
      .then(()=>{
        this.$router.push('/app/login')
      })
    }
  }
}
</script>
