import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')


const Order = () => import('@/views/orders/Order')
const OrderDetails = () => import('@/views/orders/OrderDetails')
const Servicemen = () => import('@/views/servicemen/Servicemen')
const SingleServiceman = () => import('@/views/servicemen/SingleServiceman')
const Customers = () => import('@/views/customers/Customers')
const SingleCustomer = () => import('@/views/customers/SingleCustomer')
const Settings = () => import('@/views/Settings')
const Costing = () => import('@/views/costing/Costing')


Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'orders',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              name: 'Orders',
              path: '',
              component: Order
            },
            {
              name: 'order',
              path: '/orders/:id',
              component: OrderDetails
            }
          ]
        },
        {
          path: 'servicemen',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              name: 'Servicemen',
              path: '',
              component: Servicemen
            },
            {
              name: 'serviceman',
              path: '/servicemen/:id',
              component: SingleServiceman
            }
          ]
        },
        {
          path: 'customers',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              name: 'Customers',
              path: '',
              component: Customers
            },
            {
              name: 'customer',
              path: '/customers/:id',
              component: SingleCustomer
            }
          ]
        },
        {
          path: 'settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: 'costing',
          name: 'Costing',
          component: Costing
        },
      ]
    },
    {
      path: '/app/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
