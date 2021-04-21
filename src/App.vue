<template>
  <div>
    <router-view></router-view>
    <Loading v-if="$store.state.loading" />
  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  name: 'App',
  components:{Loading}
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
  .l-modal{
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0, 0.1);
  }
  .loading-modal{
    min-height: 350px; 
  }

</style>
