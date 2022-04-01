import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    token: null
  },
  getters: {},
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    async login({
      commit
    }, usuario) {
      console.log(usuario)

      try {
        const res = await fetch('http://127.0.0.1:3001/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario)
        })

        const resDB = await res.json()
        console.log(resDB);

        commit('setToken', resDB.data.token)

        localStorage.setItem('token', resDB.data.token)

      } catch (error) {
        console.log(error);
      }
    },
    leerToken({
      commit
    }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
        console.log("token read from localS to state");
      } else {
        console.log("no token from leerT func");
        commit('setToken', null)
      }
    },
    cerrarSesion({
      commit
    }) {
      commit('setToken', null)
      localStorage.removeItem('token')
    }

  },


  modules: {}
})