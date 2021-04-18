<template>
  <CCardBody>
    <CDataTable
      :items="customers"
      :fields="fields"
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
      table-filter
      cleaner
    >
    <template #name="{item}">
      <td>
        <router-link :to="{ name: 'customer', params: { id: item.id }}">{{item.name}}</router-link>
      </td>
    </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
const customers = [
  {id: 1, name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/03', email: 'ststsdrsxd@gmail.com',  },
  {id: 2, name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/04', email: 'ststsdrsxd@gmail.com',  },
  {id: 3, name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/01', email: 'ststsdrsxd@gmail.com',  },
  {id: 4, name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/05', email: 'ststsdrsxd@gmail.com',  },
  {id: 5, name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/03', email: 'ststsdrsxd@gmail.com',  },
  {id: 6, name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/02', email: 'ststsdrsxd@gmail.com',  },
  {id: 7, name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/04', email: 'ststsdrsxd@gmail.com',  },
  {id: 8, name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/03', email: 'ststsdrsxd@gmail.com',  },
  {id: 9, name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/01', email: 'ststsdrsxd@gmail.com',  }
  
]

const fields = [
  { key: 'name', _style:'min-width:30%' },
  { key: 'number', label: 'Phone number', _style:'min-width:20%;' },
  { key: 'address', _style:'min-width:20%;' },
  'email',
  'no_of_orders',
  
  { key: 'date_joined', _style:'min-width:10%;' },
  
]

export default {
  data () {
    return {
      // ordersData: ordersData.map((item, id) => { return {...item, id}}),
      customers: customers.map((item, index) => { return {...item, index}}),
      fields,
      details: [],
      collapseDuration: 0,
    
    }
  },
  methods: {
    
  }
}
</script>