<script>
export default {
  name: 'nav',
  computed: { 
    sidebarItems () {
      return [
        {
          _name: 'CSidebarNav',
          _children: [{
              _name: 'CSidebarNavItem',
              name: this.$t('menu.dashboard'),
              to: '/dashboard',
              icon: 'cil-speedometer',
            },
            {
              _name: 'CSidebarNavItem',
              name: 'Orders',
              to: '/orders',
              icon: 'cil-gift'
            },
            {
              _name: 'CSidebarNavItem',
              name: 'Servicemen',
              to: '/servicemen',
              icon: 'cil-user'
            },
            {
              _name: 'CSidebarNavItem',
              name: 'Customers',
              to: '/customers',
              icon: 'cil-user'
            },
            {
              _name: 'CSidebarNavItem',
              name: 'Settings',
              to: '/settings',
              icon: 'cil-settings',
            },
            {
              _name: 'CSidebarNavItem',
              name: 'Costing',
              to: '/costing',
              icon: 'cil-money'
            },
            
          ]
        },
      ]
    }
  }
}
</script>
