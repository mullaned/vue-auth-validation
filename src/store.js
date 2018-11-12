import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      idToken: null,
      iserId: null
  },
  mutations: {

  },
  actions: {
    signup({commit}, authData){
      axios.post('/signupNewUser?key=AIzaSyBvH5qwN_s3xQc4aPh3lyJRY-QnFmYwhag', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
    },
    login({commit}, authData){
      axios.post('/verifyPassword?key=AIzaSyBvH5qwN_s3xQc4aPh3lyJRY-QnFmYwhag', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
    }
  },
  getters: {

  }
})