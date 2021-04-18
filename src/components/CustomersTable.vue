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
    </CDataTable>
  </CCardBody>
</template>

<script>
const customers = [
  {name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/03', email: 'ststsdrsxd@gmail.com',  },
  {name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/04', email: 'ststsdrsxd@gmail.com',  },
  {name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/01', email: 'ststsdrsxd@gmail.com',  },
  {name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/05', email: 'ststsdrsxd@gmail.com',  },
  {name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/03', email: 'ststsdrsxd@gmail.com',  },
  {name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/02', email: 'ststsdrsxd@gmail.com',  },
  {name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/04', email: 'ststsdrsxd@gmail.com',  },
  {name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/03', email: 'ststsdrsxd@gmail.com',  },
  {name: 'Obiwan Pelosi', number: '08097545678', no_of_orders: '5', address: 'Plot 567, Adekunle Ijaniki, Off Westside Road', date_joined: '2012/02/01', email: 'ststsdrsxd@gmail.com',  }
  
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
      customers: customers.map((item, id) => { return {...item, id}}),
      fields,
      details: [],
      collapseDuration: 0,
    
    }
  },
  methods: {
    
  }
}
</script>