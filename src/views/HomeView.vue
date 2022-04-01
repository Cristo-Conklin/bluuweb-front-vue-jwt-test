<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Login</h1>
    <form @submit.prevent="login(usuario)">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        v-model="usuario.email"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="pass"
        v-model="usuario.password"
      />
      <button type="submit">Acceder</button>
    </form>
    {{ usuario }}
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      usuario: {
        email: 'prueba5@prueba.com',
        password: '123123',
      },
    };
  },
  methods: {
    ...mapActions(['login'])
  }
};
</script>
