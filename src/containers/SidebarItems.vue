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
            },
            {
              _name: 'CSidebarNavItem',
              name: 'Orders',
              to: '/orders',
            },
            {
              _name: 'CSidebarNavItem',
              name: 'Servicemen',
              to: '/servicemen',
            },
            {
              _name: 'CSidebarNavItem',
              name: 'Customers',
              to: '/customers',
            },
            {
              _name: 'CSidebarNavItem',
              name: 'Settings',
              to: '/settings',
            },
            {
              _name: 'CSidebarNavItem',
              name: 'Costing',
              to: '/costing',
            },
            
          ]
        },
      ]
    }
  }
}
</script>
