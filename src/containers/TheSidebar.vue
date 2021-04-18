<template>
  <CSidebar
    
    :minimize="minimize"
    unfoldable
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
  <!--  -->
    <CSidebarBrand class="d-md-down-none justify-content-start p-3" to="/" style="text-decoration: none">
      <img 
        :src="Logo"
        class="c-sidebar-brand-full"
        name="logo"
        size="custom-size"
        :height="70"
        viewBox="0 0 110 134"
         
      />
      <p style="font-size: 1.8em" class="ml-2">Smooth Repairs</p>
    </CSidebarBrand>
    <CRenderFunction flat :contentToRender="sidebarItems"/>
    <CSidebarMinimizer
      class="c-d-md-down-none"
      @click.native="$store.commit('toggle', 'sidebarMinimize')"
    />
  </CSidebar>
</template>

<script>
import SidebarItems from './SidebarItems'
import Logo from '@/assets/srlogo.png'
export default {
  name: 'TheSidebar',
  extends: SidebarItems,
  data(){
    return {
      Logo: Logo
    }
  },
  computed: {
    show () {
      return this.$store.state.sidebarShow
    },
    minimize () {
      return this.$store.state.sidebarMinimize
    }
  }
}
</script>

