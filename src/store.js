import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  asideShow: false,
  darkMode: false,
  token: localStorage.getItem('user-token') || '',
  status: '',
}
const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  },
  toggle (state, variable) {
    state[variable] = !state[variable]
  },
  authRequest(state){
    state.status = 'loading'
  },
  authSuccess(state, token){
    state.status = 'success'
    state.token = token
  },
  authError(state){
    state.status = 'error'
  },
}

const actions = {
  authRequest({commit, dispatch}, user){
    return new Promise((resolve, reject)=>{
      // commit(authRequest)
      // axios({url: 'auth', data: user, method: 'POST'})
      // .then(res=>{
      //   const token = res.data.token
      //   //Store token in local storage
      //   localStorage.setItem('user-token', token)
      //   // Set token as deafult Authorization header for future requests
      //   axios.defaults.headers.common['Authorization'] = token
      //   commit('authSuccess', token)
      //    dispatch(USER_REQUEST)
      // resolve(res)
      console.log('User logged in successfully')
      resolve()
      // })
      .catch(err =>  {
        // commit('authError', err)
        // //If auth fails, remove every possible user-token in local storage
        // localStorage.removeItem('user-token')
        reject(err)
      })
    })
  },
  authLogout({commit, dispatch}){
    return new Promise((resolve, reject)=>{
      // commit('authLogout')
      // localStorage.removeItem('user-token')
      // delete axios.defaults.headers.common['Authorization']
      console.log('Logged out successfully')
      resolve()
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})